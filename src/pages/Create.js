import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useHistory } from 'react-router-dom';

let classes = {
  field: {
    marginBottom: 2,
    display: 'block'
  }
}

const Create = () => {

  let [noteContent, setNoteContent] = useState({
    title: '',
    details: '',
    category: 'todos',
    titleError: false,
    detailsError: false
  })

  let history = useHistory();

  let handleChange = (e) => {
    let name = e.target.name;

    setNoteContent({...noteContent, [name]: e.target.value});
  }

  let handleRadioChange = (e) => {
    setNoteContent({...noteContent, category: e.target.value});
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    setNoteContent({...noteContent, titleError: false, detailsError: false});

    setNoteContent({
      ...noteContent,
      titleError: noteContent.title == '',
      detailsError: noteContent.details == ''
    })

    if (noteContent.title != '' && noteContent.details != '') {
      let {title, details, category} = noteContent;
      fetch("http://localhost:8000/notes", {
        method: 'POST',
        headers: {"content-type":"application/json"},
        body: JSON.stringify({title, details, category})
      })
      .then(() => history.push('/'))
      .catch((error) => {
        console.log("Something went wrong", error);
      })
    }
  }

  return (
    <Container>
      <Typography variant="h6" component="h2" gutterBottom color="textSecondary">
        Create a New Note
      </Typography>


      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          variant="outlined"
          label="Note Title"
          name="title"
          fullWidth
          color="secondary"
          required
          sx={classes.field}
          onChange={handleChange}
          error={noteContent.titleError}
        />

        <TextField 
          variant="outlined"
          label="Details"
          name="details"
          multiline
          rows={4}
          required
          fullWidth
          color="secondary"
          sx={classes.field}
          onChange={handleChange}
          error={noteContent.detailsError}
        />

        <FormControl sx={classes.field} component="fieldset">
          <FormLabel component="legend" sx={{color: 'red', '&.MuiFormLabel-colorPrimary':{
            color: '#999'
          }
          }}>Categories</FormLabel>
          <RadioGroup color="secondary" value={noteContent.category} onChange={handleRadioChange}>
            <FormControlLabel value="money" control={<Radio color="secondary"/>} label="Money" />
            <FormControlLabel value="todos" control={<Radio color="secondary"/>} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio color="secondary"/>} label="Reminders" />
            <FormControlLabel value="work" control={<Radio color="secondary"/>} label="Work" />
          </RadioGroup>
        </FormControl>


        <Button
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
          type="submit"
        >
            Submit
        </Button>
      </form>

    </Container>
  )
}

export default Create

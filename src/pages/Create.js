import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";

let classes = {
  field: {
    marginBottom: 2,
  }
}

const Create = () => {

  let [noteContent, setNoteContent] = useState({
    title: '',
    details: '',
    titleError: false,
    detailsError: false
  })

  let handleChange = (e) => {
    let name = e.target.name;

    setNoteContent({...noteContent, [name]: e.target.value});
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    setNoteContent({...noteContent, titleError: false, detailsError: false});

    setNoteContent({
      ...noteContent,
      titleError: noteContent.title == '',
      detailsError: noteContent.details == ''
    })
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

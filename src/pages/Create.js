import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Create = () => {
  return (
    <Container>
      <Typography variant="h6" component="h2" gutterBottom color="textSecondary">
        Create a New Note
      </Typography>

      <Button 
        variant="contained"
        color="primary"
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon/>}
      >
          Submit
      </Button>
    </Container>
  )
}

export default Create

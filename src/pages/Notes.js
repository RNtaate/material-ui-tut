import { Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';

import NoteCard from '../components/NoteCard';

const Notes = () =>  {
  let [myNotes, setMyNotes] = useState([]);

  let handleNoteDelete = async (note) => {
    await fetch("http://localhost:8000/notes/" + note.id, {
      method: 'DELETE'
    })
    .then((res) => {
      let newNotes = myNotes.filter((currentNote) => currentNote.id != note.id)
      setMyNotes(newNotes);
    }).catch((error) => {
      console.log('Something went wrong', error)
    })
  }

  useEffect(async () => {
    await fetch("http://localhost:8000/notes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setMyNotes(data);
    }).catch((error) => {
      console.log('Something went wrong ', error);
    })

  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {
          myNotes.map(note => (
            <Grid item key={note.id} xs={12} sm={6} md={4} lg={3}>
              <NoteCard note={note} handleNoteDelete={handleNoteDelete}/>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default Notes

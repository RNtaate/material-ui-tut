import { Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';

import NoteCard from '../components/NoteCard';

const Notes = () =>  {
  let [myNotes, setMyNotes] = useState([]);
  useEffect(async () => {
    let response = await fetch("http://localhost:8000/notes")
    await response.json().then((rslt) => {
      console.log(rslt);
      setMyNotes(rslt);
    }).catch((error) => {
      console.log("Something went wrong", error);
    })

  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {
          myNotes.map(note => (
            <Grid item key={note.id} xs={12} sm={6} md={4} lg={3}>
              <NoteCard note={note}/>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default Notes

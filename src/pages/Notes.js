import { Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Masonry from 'react-masonry-css'

import NoteCard from '../components/NoteCard';

const Notes = () =>  {
  let [myNotes, setMyNotes] = useState([]);
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

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
    <Container 
      sx={{padding: 2}}
    >
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {
          myNotes.map(note => (
            <div key={note.id} >
              <NoteCard note={note} handleNoteDelete={handleNoteDelete}/>
            </div>
          ))
        }
      </Masonry>
    </Container>
  )
}

export default Notes

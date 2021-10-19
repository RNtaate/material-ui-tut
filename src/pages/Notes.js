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

  useEffect(() => {
    // await fetch("http://localhost:8000/notes")
    // .then((response) => {
    //   return response.json();
    // })
    // .then((data) => {
    //   console.log(data);
    //   setMyNotes(data);
    // }).catch((error) => {
    //   console.log('Something went wrong ', error);
    // })

    if(localStorage.getItem("notes")){
      let notesArray = JSON.parse(localStorage.getItem("notes"));
      setMyNotes(notesArray);
    }

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
          myNotes.length > 0 ?
          myNotes.map((note, key) => (
            <div key={key} >
              <NoteCard note={note} handleNoteDelete={handleNoteDelete}/>
            </div>
          )) :
          <div>There are no notes created.</div>
        }
      </Masonry>
    </Container>
  )
}

export default Notes

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

  let handleNoteDelete = (note) => {
    let newNotesArray = myNotes.filter( currentNote => currentNote.id != note.id)
    newNotesArray.map((note, index) => note.id = `${index + 1}`) // update notes ids
    setMyNotes(newNotesArray);
    localStorage.setItem("notes", JSON.stringify(newNotesArray));
  }

  useEffect(() => {
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
          myNotes.map(note => (
            <div key={note.id} >
              <NoteCard note={note} handleNoteDelete={handleNoteDelete}/>
            </div>
          )) :
          <Typography
            variant="h4"
            sx={{
              color: "#bbb"
            }}
          >There are no notes created.</Typography>
        }
      </Masonry>
    </Container>
  )
}

export default Notes

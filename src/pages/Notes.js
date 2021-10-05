import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'

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
    <div>
      <Typography variant="h5">NOTES</Typography>
      {
        myNotes.length == 0 ?
        null :
        myNotes.map((note) => <Typography variant="h6" component="h2" key={note.id} color="textSecondary">{note.title}</Typography>)
      }
    </div>
  )
}

export default Notes

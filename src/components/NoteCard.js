import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Avatar from '@mui/material/Avatar';
import { blue, green, pink, yellow } from '@mui/material/colors';

const NoteCard = ({ note, handleNoteDelete }) => {

  let handleDelete = () => {
    handleNoteDelete(note);
  }

  let checkCategory = () => {
    switch(note.category) {
      case "work":
        return yellow[700];
      case "money":
        return green[500];
      case "todos":
        return pink[500];
      default: 
        return blue[500];
    }
  }

  return (
    <div>
      <Card>
        <CardHeader
        avatar={
          <Avatar
            sx={{
              backgroundColor: checkCategory()
            }}
          >
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={handleDelete}>
            <DeleteOutlinedIcon />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {note.details}
          </Typography>
      </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard;

import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const NoteCard = ({ note }) => {
  return (
    <div>
      <Card>
        <CardHeader
        action={
          <IconButton>
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

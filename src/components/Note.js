import React, {useContext} from 'react'
import NoteContext from '../Context/NoteContext'

const Note = ({note}) => {
    const {RemoveNote} = useContext(NoteContext)

    const deleteNote = (id)=>{
        RemoveNote(id)
    }

    return (
        <div className="note">
            <span>{note.body}</span>
            <div className="note-footer">
                <small>{new Date(note.createdAt).toDateString()}</small>
                <b onClick={()=> deleteNote(note.id)}>X</b>
            </div>
        </div>
    )
}

export default Note

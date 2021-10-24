import React, {useContext} from 'react'
import Note from './Note'
import NoteContext from '../Context/NoteContext'
import AddNote from './AddNote'

const NoteList = () => {
    const {allNotes} = useContext(NoteContext)
    return (
        <div className="note-list">
            {allNotes.map(note =>(
                <Note key={note.id} note={note}/>
            ))}
            <AddNote/>
        </div>
    )
}

export default NoteList

import React, {useContext, useState} from 'react'
import NoteContext from '../Context/NoteContext'

const AddNote = () => {
    const [value, setValue] = useState('')
    const {AddNote} = useContext(NoteContext)
    const CharacterLimit = 200;

    const handleNote = ()=>{
        if(value){
            AddNote(value)
        }

        setValue("")
    }
    return (
        <div className="note new">
            <textarea name="" id="" cols="20" value={value} onChange={(e)=> {if(CharacterLimit - e.target.value.length >=0) setValue(e.target.value)}} rows="5" placeholder="Start a new note here..."></textarea>
            <div className="note-footer">
                <small>{CharacterLimit - value.length} Remaining</small>
                <button onClick={handleNote}>Save</button>
            </div>           
        </div>
    )
}

export default AddNote

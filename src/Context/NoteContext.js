import {createContext, useState, useEffect} from 'react'

export const NoteContext = createContext()

export function NoteProvider({children}){
    const [notes, setNotes] = useState([
        {id:1, body:"This is one of my first note created", createdAt: new Date()},
        {id:2, body:"This is one of my first note", createdAt: new Date()},
        {id:3, body:"This is my first note", createdAt: new Date()},
        {id:4, body:"This is another note of mine", createdAt: new Date()},
    ])

    //Fetching LocalStorage Data to SavedNotes
    useEffect(()=>{
        const storedNotesData = JSON.parse(localStorage.getItem('notes-data'))
        if(storedNotesData){
            setNotes(storedNotesData)
        }
    }, [])

    /* Applying LocalStorage To the NoteApp for data persistence */
    useEffect(()=>{
        localStorage.setItem('notes-data', JSON.stringify(notes))
    }, [notes])

    //Search Text Hooks
    const [searchText, setSearchText] = useState('');

    //Add New Note
    const AddNote = (body)=>{
        const date = new Date();
        let newId = notes.length + 1;
        const newNotes = [...notes, {id:newId, body:body, createdAt: date.toLocaleDateString()}]
        setNotes(newNotes)
    }

    //Remove Note
    const RemoveNote = (id)=>{
        setNotes(notes.filter(note => note.id !== id))
    }

    //Search Main Variable
    const allNotes = notes.filter(note => note.body.toLowerCase().includes(searchText))


    return (
        <NoteContext.Provider value={{notes, AddNote, RemoveNote, allNotes, setSearchText}}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteContext;
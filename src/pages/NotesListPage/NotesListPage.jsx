import { useEffect, useState } from "react"
import * as notesAPI from "../../utilities/notes-api"
import NoteCard from "../../components/NoteCard/NoteCard"
import NewNotePage from "../NewNotePage/NewNotePage"

export default function NotesListPage({notes, setNotes}) {
    const [newNotes, setNewNotes] = useState([])
    
    useEffect(function () {
        (async function () {
            const allNotes = await notesAPI.getAll()
            setNotes([...allNotes])
        })()
    }, [newNotes])
    
    const notesList = notes.map ((note) => <NoteCard note={note}/> )

    return (
        <> 
            <NewNotePage setNewNotes={setNewNotes}/> 
            {notes.length ? notesList : "No Notes Yet!"}
        </>
    )
}
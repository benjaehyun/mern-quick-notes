import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as notesAPI from "../../utilities/notes-api"

export default function NewNotePage({setNewNotes}) {
    const [formData, setFormData] = useState({text: ''})

    function handleChange(e) {
        const newFormData = {...formData, [e.target.name]: e.target.value }
        setFormData(newFormData)
    }
    // const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault() 
        try {
            notesAPI.createNote(formData)
            setNewNotes(formData)
            setFormData({text: ''})
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Note Text: </label>
            <input type="text" name="text" onChange={handleChange} value={formData.text}/>
            <button type="submit">Add Note</button>
        </form>
    )
}
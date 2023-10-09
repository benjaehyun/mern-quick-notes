export default function NoteCard ({note}) {
    return (
        <>
            <h3>{note.text}</h3>
            <p>{note.createdAt.toLocaleString()}</p>
        </>
    )
}
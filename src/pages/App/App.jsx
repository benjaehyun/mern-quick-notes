import {useState, useEffect} from "react"
import { Routes, Route } from "react-router-dom"
import { getUser } from "../../utilities/users-service";
import * as notesAPI from "../../utilities/notes-api";
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import NotesListPage from "../NotesListPage/NotesListPage";
import NewNotePage from "../NewNotePage/NewNotePage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser()) //the initial value for the state is the return from the getUser function
  const [notes, setNotes] = useState([]) 
  // const [notes, setNotes] = useState([{text:'1'}, {text:'2'}, {text:'3'}, {text:'4'}]) 

 

  return (
    <main className="App">
      {user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* <Route path="/notes/new" element={ <NewNotePage /> } /> */}
            <Route path="/" element={ <NotesListPage notes={notes} setNotes={setNotes}/> } />
          </Routes>
        </>
        : 
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


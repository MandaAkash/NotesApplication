import React, { useState,useEffect } from 'react'
import NotesList from './components/NotesList'
import {nanoid} from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';
// import AddNote from './components/AddNote';

function Main() {

const [notes,setNotes] = useState([]);
const [searchNote,setSearchNote] = useState('');
const [darkMode,setDarkMode] = useState(false)

useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
  if(savedNotes){
    setNotes(savedNotes)
  }
},[])

useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
},[notes])

const addNote = (text) =>{
  
  const date = new Date();
  const newNote = {
    id:nanoid(),
    text : text,
    date : date.toLocaleDateString()
  }
  const newNotes = [...notes,newNote]
  setNotes(newNotes)
}

const deletingNote = (id) =>{
 const newNotes = notes.filter((note)=> note.id!==id);
 setNotes(newNotes)
}



const updateNote = (value , id) =>{
 // const newNotes = notes.map((note) => (note.id === id ? (note.text = value) : note));
 console.log(id)

  //const newNotes = notes.map((note,id) => {
          // var temp = Object.assign({}, note);
          // console.log(note)
          // if (note.id === id) {
          //     {...notes,text:value}
          // }
          // return temp;
          
          const date = new Date();
          const newNote = {
            id:nanoid(),
            text :value,
            date : date.toLocaleDateString()
  }
  const newNotes = [...notes,newNote]
  setNotes(newNotes)
//});
 // setNotes(newNotes)
//  setNotes((notes)=>{notes.map((n)=>{
//   n.map((no)=>{
//     if(no.id===id){
//       {...no,text:value}
//     }
//   })
//  })})
 window.location.reload();
}



  return (
    <div className={`${darkMode && 'dark-mode'}`}>

          <div className="container">
            
        
      <Header handleToggleDarkMode={setDarkMode}/>

      <Search handleSearch={setSearchNote}/>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchNote))} handleAddNote={addNote} handleDelete={deletingNote} updateNote={updateNote}/>

    </div>
    </div>

  )
}

export default Main;

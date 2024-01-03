import React , {useState} from 'react'
import Note from './Note'
import AddNote from './AddNote'


const NotesList=(props) =>{

    const [edit , setEdit] = useState(false);
    const [val , setVal] = useState('');
    const [id , setId] = useState('');
    const handleEdit = (text , id ) => {
        setEdit(true);
        setVal(text);
        setId(id);
    }
    // console.log(edit);
    if(edit) {
        return (
            <div>
        <AddNote edit={edit} val={val} id={id} updateNote={props.updateNote}/>
        
        </div>
    )}
    if(edit) {
        setEdit(false);
        setVal('');
        setId('');
    }

    return (
        <div className="notes-list">
        
           {props.notes.map((note)=>
               <Note id={note.id} text={note.text} date={note.date}
               handleDelete={props.handleDelete} handleEdit = {handleEdit}
               />
           )}
           
           <AddNote handleAddNote={props.handleAddNote}/>
        </div>
    )
}

export default NotesList

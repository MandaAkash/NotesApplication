import React,{useState} from 'react'


function AddNote(props) {
    // console.log(props.edit)
    const [noteText,setNoteText] = useState(props.edit === true ? props.val: '');
    
    const charLimit = 300;
    
    const handleChange =(event)=>{
   
    if(charLimit - event.target.value.length>=0){
        setNoteText(event.target.value)
    }
   
    }
    
    
    const handleSaveClick =() =>{
    
        if(noteText.trim().length>0){
            props.handleAddNote(noteText);
            setNoteText('');
        }
       
    }

    const handleUpdateClick=() => {
        if(noteText.trim().length>0) {
            console.log(noteText);
            props.updateNote(noteText , props.id);
        }
        
    }
    return (
        <div className="note new">
        {props.edit === true ? (
            <>
            
            <textarea cols = '10' rows="8" placeholder="Type to update your note..."
            onChange={handleChange} value={noteText}
            >{noteText}</textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleUpdateClick}>Edit</button>
            </div>
        </>
        ) : (
            <>
            <textarea cols = '10' rows="8" placeholder="Type to add your note..."
            onChange={handleChange} value={noteText}
            >{noteText}</textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
            </>
        )}
        </div>
    );
}

export default AddNote

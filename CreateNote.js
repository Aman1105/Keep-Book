import React, { useState } from 'react'

import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';


export default function CreateNote(props) {
    const [expand, setExpand] = useState(false);
    const [note,setnote] = useState({
        tittle : "",
        content : ""
    });
    const InputEvent = (event)=>{

        //const value = event.target.value;
        //const name = event.target.value;
        const {name , value} = event.target;


        setnote((prevData)=>{
            return{

                ...prevData,
                [name] : value
        }
        });
    }
    const addEvent=()=>{
    props.passNote(note);
    setnote({
        tittle : "",
        content : ""
    });
    };
    const expandIt = ()=>{
        setExpand(true);
    }
    const backToNorm = ()=>{
        setExpand(false);
    }
  return (
    <>
    <div className='main_notes' onDoubleClick={backToNorm}>
      <form>
       { expand?<input type="text" name="tittle" value={note.tittle} onChange={InputEvent} placeholder='Tittle'/>:null}
        <textarea rows='' name="content" value={note.content} onChange={InputEvent} column='' placeholder='Write a note...' autoComplete='off' onClick={expandIt} ></textarea>
        {expand ?<Button onClick={addEvent}>
            <AddIcon className='plus_sign'></AddIcon>
        </Button> :null}
      </form>
    </div>
    </>
  )
}

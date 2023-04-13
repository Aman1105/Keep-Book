
import { useState } from 'react';
import './App.css';
import CreateNote from './CreateNote';
import Header from './Header';
import Note from './Note';

function App() {
  const [addItem ,setAddItem] = useState([]);
  const onDelete =(id)=>{
    setAddItem((oldData)=>
    oldData.filter((currdata,indx)=>{
      return indx !== id;
    }) 
    )
  }
  const addNote = (note) =>{
    setAddItem((prevData)=>{
      return[...prevData, note]
    })
  }
  return (
    <>
   <Header/>
   <CreateNote passNote={addNote}/>
   
   {addItem.map((val,index)=>{
    return( <Note 
       key={index}
       id={index}
       tittle={val.tittle}
       content = {val.content}
       deleteItem = {onDelete}
    />
    );
   })}
   </>
  );
}

export default App;

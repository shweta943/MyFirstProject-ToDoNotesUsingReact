import React, { useState } from "react";
//import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import CreateNotes from "./CreateNotes.jsx";
import Note from "./Note.jsx";

const App=()=>{
    //we are making a hook of array here so that after clicking the add button it will update data in note i.e. in an array amd then
    //the array will get stored in the Note component after clicking the add button.
    const [addItem, setAddItem]=useState([]);


    const addNote = (note) =>{
        //alert("i m fine");
        setAddItem((oldItem) =>{
            return [...oldItem, note];
        })
        //console.log(note);
    };

    const onDelete =(id)=>{

        setAddItem((oldItem)=>
        oldItem.filter((currData, index)=>{
            return index !==id;
        }))
       

    };
    

    return (
        //function addnote is created as an attribute
        <>
            <Header/><br/>
            
            <CreateNotes passNote={addNote}/><br/>
            {
                //we will take array map method so that as soon as we write a title and content , the data will
                //automatically get stored in the array which we have created in useState 
                addItem.map((val, index)=>{
                    return (
                        <Note 
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    delete={onDelete}
                    />
                    );
                })  
            }
            
        </>
        //we have made an attribute passnote here to call our own function upon clicking button
    );
};

export default App;
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "./CreateNotes.css";

const CreateNotes = (props) => {


//this is just an extra logic if we single click on textarea then title and plus sign will get expanded 
//if we doubleclick on textarea after adding note then title nd textarea will get decreased.
    const [expand, setExpand]=  useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputItem = (event) => {
        //const value=event.target.value;
        //const name=event.target.name;
        const { name, value } = event.target;


        setNote((oldItems) => {

            return {
                ...oldItems, 
                [name]: value,
            };

        });

    };
    const addEvent = () =>{
        props.passNote(note);
        //here we call setnote so as to empty the note box after clicking on add button
        setNote({
            title: "",
            content: "",
        });

    }

    
    return (
        <>
            <div className="main_div">
                <form>
                <input type="text"
                        placeholder="Title"
                        autoComplete="off"
                        onChange={InputItem}
                        value={note.title} 
                        name="title"
                        />

                    <textarea rows=""
                        column=""
                        placeholder="write notes here"
                        className="text_area"
                        onChange={InputItem}
                        value={note.content}
                        name="content"
                        
                        //onDoubleClick=
                        >

                    </textarea>

                    <Button onClick={addEvent}>
                        <AddIcon className="plus" />

                    </Button>
                </form>
            </div>
        </>
    );
};
export default CreateNotes;
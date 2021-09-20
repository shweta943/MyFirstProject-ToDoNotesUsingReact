import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./Note.css";

const Note = (props) =>{
    const deleteNote=()=>{
        props.delete(props.id);
    };
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button className="btn" onClick={deleteNote}>
                <DeleteOutlineIcon className="deleteItems"/>
                </button>
            </div>
        </>
    );
};
export default Note;
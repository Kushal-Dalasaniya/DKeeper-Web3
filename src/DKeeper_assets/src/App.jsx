import React,{useState,useEffect} from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Note from "./components/note";
import notes from "./notes";
import CreateArea from "./components/createArea";
import { DKeeper } from "../../declarations/DKeeper";

function App(){

    const [noteArray,setNoteArray]=useState([]);

    function AddNote(NewNote){
        console.log(NewNote);
        DKeeper.createNote(NewNote.title,NewNote.content);
        setNoteArray([NewNote,...noteArray]);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    async function fetchData(){
        const noteArr=await DKeeper.readNotes();
        setNoteArray(noteArr);
    }

    function deleteNote(id){
        DKeeper.DeleteNote(noteArray[id].title);
        setNoteArray(noteArray.filter((noteObj,ind)=>{return ind!==id}));
    }

    return <div>
        <Navbar />
        <CreateArea onSubmit={AddNote}/>
        {noteArray.map((ele,index)=>{return <Note key={index} id={index} title={ele.title} contant={ele.content} onClickDelete={deleteNote}/>})}
        <Footer />
    </div>;
}

export default App;
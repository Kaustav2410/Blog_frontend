import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import {Navigate} from "react-router-dom";
import Editor from "../Editor";

export default function CreatPost(){

    const [title,setTitle]=useState('');
    const [content, setContent] = useState('');
    const [summary,setSummary]=useState('');
    const [files,setFiles]=useState('');
    const [redirect,setRedirect]=useState(false);

    async function createNewPost(e){
        const data = new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('file',files[0]);
        
        e.preventDefault();
        console.log(files);
        console.log(content);

        const response = await fetch('http://localhost:4000/createpost',{
            method:'POST',
            body:data,
            credentials:'include',
        });

        if(response.ok){
            console.log(response.status);
            setRedirect(true);
        }
        else if(response.status===401){
            alert("Login before creating posts");
        }

    }
    if(redirect){
        return <Navigate to={'/'}/>
    }
    return(
        // <div>
        //     Here you create your new post
        // </div>
        <form onSubmit={createNewPost}>
            <input type="title" placeholder={'Title'} value={title} onChange={e=>setTitle(e.target.value)}/>
            <input type="summary" placeholder={'summary'} value={summary} onChange={e=>setSummary(e.target.value)}/>
            <input type="file" onChange={e=>setFiles(e.target.files)} />
            <Editor value={content} onChange={setContent} />
            <button className="btn">Create Post</button>
        </form>
    );
}
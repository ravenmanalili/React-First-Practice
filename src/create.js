import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false); // kase di mo panaman ginagamit|| gagamiting lang sa submit form
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const blog = {title, body, author};
        setIsPending(true); // gagamitin mo na dito
        fetch('http://localhost:8000/blogs', {

            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added');
            setIsPending(false); // pag complete na set mo into false ulit
            history.push('/')
        })
    }
    return ( 
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit}>  {/* onSubmit - It specifies a function that should be executed when a form is submitted */}
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Content:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}
               
            </form>
        </div>

     );
}
 
export default Create;
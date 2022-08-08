import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () =>{
  const [title,setTitle]= useState('');
  const [body,setBody]= useState('');
  const [author,setAuthor]= useState('');
  const history = useHistory();

  const handelSubmit = (e) =>{
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then( () => {
       history.push('/');
    })

    }
  
    return(
      <div className="create">
         <form onSubmit={handelSubmit}>
         <label>Blog title</label>
         <input type="text" name="title" placeholder="Blog title" value={title}
         onChange={(e) => setTitle(e.target.value)}/><br></br>
         <label>Blog content</label>
         <textarea value={body} onChange={(e) => setBody(e.target.value)}>
         <br></br>
         </textarea><br></br>
         <label>Blog author</label><br></br>
         <select value={author} onChange={(e) => setAuthor(e.target.value)}>
         <option value="moustafa">moustafa</option>
         <option value="djafri">djafri</option>
         </select>
         <button >Add blog</button>
         </form>
      </div>
    );

}
export default Create;
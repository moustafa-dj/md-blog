import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetailles = () =>{
  const {id} = useParams();
  const history = useHistory();
  const {data : blog, isPending,error}=useFetch('http://localhost:8000/blogs/'+ id);

  const handelDellete= () => {
    fetch('http://localhost:8000/blogs/'+ id , {
    
    method: 'DELETE'
  }).then( () => {
      history.push('/');
  })

    
  }
    return(
        <div className="Blog-detailles">
          {isPending && <div>louding...</div>} 
          {error && <div>{error}</div>} 
          {blog && (
            <article>
              <h2>{blog.title}</h2>
              <p>riten by :{blog.author}</p>
              <div>{blog.body}</div>
              <button onClick={handelDellete}>delete</button>
            </article>
          )} 
        </div>
    );

}

export default BlogDetailles;
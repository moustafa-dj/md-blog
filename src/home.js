
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

const{data : blogs , pending,errur} = useFetch('http://localhost:8000/blogs');







    return (
            <div className="home">
              { errur && <div>{errur}</div>}
              {pending&& <div>loading... </div>}
              {blogs&&<BlogList blogs={blogs} title="All blogs !"  />}
            </div>
    );
}

export default Home;
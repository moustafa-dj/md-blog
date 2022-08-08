

import Navbar from './navbar';
import Home from './home';
import Create from './Create';
import notFound from './notFound';
import BlogDetailles from './BlogDetailles';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
         <Route exact path='/'>
           <Home/>
         </Route>
         <Route path='/create'>
           <Create/>
         </Route>
         <Route path='/blogs/:id'>
           <BlogDetailles/>
         </Route>
         <Route path='*'>
           <notFound/>
         </Route>
        </Switch>
         
      </div>
    </div>
  </Router>
  );
}

export default App;

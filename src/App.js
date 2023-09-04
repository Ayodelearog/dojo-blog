import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import GoogleAuth from './Signup/GoogleAuth';


function App() {


  return (
    <Router>
      
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/" component={GoogleAuth} />
            <Route exact path="/home">    
              <Home />
            </Route>
            <Route path="/create">    
              <Create />
            </Route>
            <Route path="/blogs/:id">    
              <BlogDetails />
            </Route>
            <Route path="*">    
              <NotFound />
            </Route>
            <Route >    
              <GoogleAuth />
            </Route>
          </Switch>
        </div>

        
      </div>
    </Router>
  );
}

export default App;

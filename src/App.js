import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './create';
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>  
      {/* so you can use the router in the entire application */}
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> // allows you to define a set of routes and ensures that only the first matching route is rendered
              <Route exact path = "/">
                {/* you added exact sa path para yun yung ifollow nya pag kase dimo nilagay yon, si /create ang ilalabas nya din ay route ni "/" */}
                  <Home />
              </Route>
              <Route path = "/create">
                  <Create />
              </Route>
              <Route path = "/blogs/:id">
                  <BlogDetails />
              </Route>
              <Route path = "*">
                <NotFound/>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

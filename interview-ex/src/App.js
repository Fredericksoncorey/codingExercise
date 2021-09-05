import React, {useState} from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import {Search, Home} from "./components"
function App() {
  
  const [searchHistory, setSearchHistory] = useState()
  

  return (
    <Router>
      <nav>
        <h1>Search</h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/history'>Search History</Link>
          <Link to='/search'>Search History</Link>

        </div>
      </nav>

      <main>
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          
          <Route path = "/search">
            <Search />
          </Route>

          <Route path = "/history">

          </Route>


      
    
        </Switch>
      </main>
    </Router>
  );

}



export default App;

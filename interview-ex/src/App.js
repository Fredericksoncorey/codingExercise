import React, {useState} from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import {Search, Home, History} from "./components";
function App() {
  
  const searchHistory = []

  

  return (
    <Router>
      <nav>
        <h1>Search</h1>
        <div>
          <Link to="/">Home </Link>
          <Link to="/history"> History </Link>
          <Link to="/search"> Search </Link>

        </div>
      </nav>

      <main>
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          
          <Route path = "/search">
            <Search 
              searchHistory={searchHistory}  
            />
          </Route>

          <Route path = "/history">
            <History 
              searchHistory={searchHistory} 
            />
          </Route>


      
    
        </Switch>
      </main>
    </Router>
  );

};



export default App;

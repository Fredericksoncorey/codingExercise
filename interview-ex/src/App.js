import React, {useState} from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"

function App() {
  
  const [searchHistory, setSearchHistory] = useState()
  
  
  return (
    <Router>
      <nav>
        <h1>Search</h1>
        <div>
          <Link to='/'>Back</Link>
          <Link to='/history'>Search History</Link>
        </div>
      </nav>
    </Router>
  );
}

export default App;

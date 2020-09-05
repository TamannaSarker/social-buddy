import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import BuddyDetail from './components/BuddyDetail/BuddyDetail';
import Comments from './components/Comments/Comments';






function App() {

  return (

    
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/buddy/:buddyId">
          <BuddyDetail />
        </Route>
        <Route path="/comment">
          <Comments />
        </Route>
         <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;

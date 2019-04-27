import React, { Component } from 'react';
import CreateUserForm from './Components/Users/CreateUserForm'
import { getUsersList } from './Api/User'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

class App extends Component {
  getUserHandler = () => {
    getUsersList()
      .then(res => {
        debugger;
      })
      .catch(err => {
        debugger
      })
  }

  render() {
    return (


      <div className="App">
        <header className="App-header">
          <Router>
            <>

              {/* <div className="nav">
           <Link to="/" className="link"> <h1> Home </h1> </Link>
           <Link to="/posts" className="link"> <h1> Posts </h1> </Link>
           <Link to="/users" className="link"> <h1> users </h1> </Link>
         </div> */}



              {/*  
         <Route exact path="/users" component={UsersList} />
         <Route exact path="/users/:id" component={DisplayUser} />
         <Route exact path="/users/:id/posts" component={DisplayUserPosts} /> */}
              <Route exact path="/login" component={CreateUserForm} />

            </>
          </Router>
          <button type="button" onClick={this.getUserHandler}>friends</button>
        </header>
      </div>

    );
  }
}

export default App;

// app/javascript/components/App.jsx
import React, { Component } from 'react';
import Home from './Home';
import PostList from './PostList';
import PostAdd from './PostAdd';
import PostInfo from './PostInfo';
import PostEdit from './PostEdit';
import {HashRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Navigation />
            <Main />
          </div>
        </Router>
      </div>
    );
  }
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/posts">Posts</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/posts" component={PostList} />
    <Route exact path="/posts/new" component={PostAdd} />
    <Route exact path="/posts/:id" component={PostInfo} />
    <Route exact path="/posts/:id/edit" component={PostEdit} />
  </Switch>
);

export default App;

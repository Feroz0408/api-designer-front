// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import App from '../../App';
import Header from '../screen1/Header';

// We give each route either a target `component`, or we can send functions in `render` or `children`
// that return valid nodes. `children` always returns the given node whether there is a match or not.
const Navigation = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to={{ pathname: '/header' }}>Header</Link>{' '}
      <Link to="/contact">Contact</Link>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/header" component={Header} />
        <Route
          path="/blog"
          children={({ match }) => (
            <li className={match ? 'active' : ''}>
              <Link to="/blog">Blog</Link>
            </li>
          )}
        />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
);

export default Navigation;

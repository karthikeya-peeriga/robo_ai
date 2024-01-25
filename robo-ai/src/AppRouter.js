import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './frame'; // Adjust the path based on your project structure

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Layout} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default AppRouter;

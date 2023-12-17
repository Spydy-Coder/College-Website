// Import necessary modules from React and React Router
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import your components/pages
import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Login from "./pages/Login";
import { AuthProvider } from './AuthContext';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/admission" exact component={Admission} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

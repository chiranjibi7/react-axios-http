import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home, Users, User, Post} from './Pages';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/users" exact component={Users}/>
          <Route path="/users/:id" component={User}/>
          <Route path="/posts/:id" component={Post}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

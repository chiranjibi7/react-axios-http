import Home from "./Pages/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Details from "./Components/Details/Details";

function App() {
  return (
    <Router>
      <div>
      <Navbar/> 
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path={`/:mediaType/:mediaId`} exact component={Details}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {
  Switch,
  Route
} from "react-router-dom";
import Main from './components/Main';
import Contact from './components/Contact';
import Details from './components/Details';
import Latest from './components/Latest';
import Popular from './components/Popular';
import LastAdded from './components/LastAdded';



function App() {
  return (
    <div className="App">

      <Nav />
      <Switch>
        <Route exact path="/latest-movies">
          <Latest />
        </Route>
        <Route exact path="/last-added-movies">
          <LastAdded />
        </Route>
        <Route exact path="/popular-movies">
          <Popular />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/:id/details">
          <Details />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

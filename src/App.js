import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { MechanicUpsert } from "./components/MechanicUpsert";
import { MechanicList } from "./components/MechanicList";
import { AppNavBar } from "./common/AppNavBar";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/create-mechanic">
          <MechanicUpsert />
        </Route>

        <Route path="/list-mechanic">
          <MechanicList />
        </Route>

        <Route exact path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

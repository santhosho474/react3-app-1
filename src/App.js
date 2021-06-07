import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { EmployeeUpsert } from "./components/MechanicUpsert";
import { EmployeeList } from "./components/MechanicList";
import { AppNavBar } from "./common/AppNavBar";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/create-mechanic">
          <EmployeeUpsert />
        </Route>

        <Route path="/list-mechanic">
          <EmployeeList />
        </Route>

        <Route exact path="/">
          <EmployeeList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

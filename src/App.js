import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <Router>
      {/** NAVIGATION LOGIC */}
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Project Book
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/page1">
              Page1
            </Nav.Link>

            <Nav.Link as={Link} to="/page2">
              Page2
            </Nav.Link>

            <Nav.Link as={Link} to="/page3">
              Page3
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/page1">
          <Page1 />
        </Route>

        <Route path="/page2">
          <Page2 />
        </Route>

        <Route path="/page3">
          <Page3 />
        </Route>

        <Route path="/">
          <Page1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

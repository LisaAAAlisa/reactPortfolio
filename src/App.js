// import logo from './logo.svg';
import './App.css';
// import Header from './components/header'
import Home from './components/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom">
        <Link to="/" className="navbar-brand">Alisa Macedo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to='/portfolio'className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/alisa-macedo-4470b331/"
                        target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/LisaAAAlisa"
                        target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
            
        </div>
    </nav>
      {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

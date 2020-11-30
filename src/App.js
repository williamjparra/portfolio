import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
//components
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>  
      </Router>
    </div>
  );
}

export default App;

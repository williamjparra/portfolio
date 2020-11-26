import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
//components
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>  
    </Router>
  );
}

export default App;

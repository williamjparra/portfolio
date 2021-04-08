import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
//components
import Home from './pages/Home'
import PdfRender from './pages/PdfRender'


function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>
        <Route exact path="/pdf" component={PdfRender} />
      </div>
    </Router>
  );
}

export default App;

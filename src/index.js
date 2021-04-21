import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer'
import {
  BrowserRouter as Router
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
    <Footer />
  </Router>
  ,
  document.getElementById('root')
);

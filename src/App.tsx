import './App.css';
import { BrowserRouter } from "react-router-dom";


import Router from './layouts/Router';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

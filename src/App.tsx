import './App.css';
import { BrowserRouter } from "react-router-dom";


import Router from './layouts/Router';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Router></Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

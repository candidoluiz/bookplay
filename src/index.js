import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login/login';
import Cadastro from './components/login/Cadastro';
// import * as serviceWorker from './serviceWorker';
import Card from './components/card/Card';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import  Home  from './components/home/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// serviceWorker.unregister();

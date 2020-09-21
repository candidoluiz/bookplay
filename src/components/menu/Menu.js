import React, { Component } from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import './Menu.css';

class Menu extends Component {    
  render(){
  return (
    <div className="nav">
      <Route>
        <ul>
            <li><Link to="/home/livros" >LIVROS</Link></li>
            <li><Link to="/home/cursos">CURSOS</Link></li>
            <li><Link to="/home/videos">VIDEO AULAS</Link></li>
            <li><Link to="/home/banca">BANCA</Link></li>
            <li><Link to="/home/audiobooks">AUDIO BOOKS</Link></li>
        </ul>
      </Route>
    </div>
  );
}
}

export default Menu;

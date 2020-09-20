import React, { Component } from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import './Menu.css';

class Menu extends Component {    
  render(){
  return (
    <div className="nav">
      <Route>
        <ul>
            <li><Link to="/teste">LIVROS</Link></li>
            <li><a href="#news">CURSOS</a></li>
            <li><a href="#contact">VIDEO AULAS</a></li>
            <li><a href="#about">BANCA</a></li>
            <li><a href="#about">AUDIO BOOKS</a></li>
        </ul>
      </Route>
    </div>
  );
}
}

export default Menu;

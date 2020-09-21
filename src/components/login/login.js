import React, { Component } from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import './Login.css';

class Login extends Component {
  render(){
  return (
    <div className='content'>
       <div id="login">
        <form method="post" action=""> 
            <h1>Login</h1> 
            <p> 
                <label for="nome_login">Usuario</label>
                <input id="nome_login" name="nome_login" required="required" type="text"/>
            </p>
            
            <p> 
                <label for="email_login">Senha</label>
                <input id="email_login" name="email_login" required="required" type="password"/> 
            </p>            
            <p> 
                <input type="submit" value="Logar" /> 
            </p>
            <p class="link">
            Ainda não tem conta?
            <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </form>
       </div>
    </div>
  );
}
}

export default Login;
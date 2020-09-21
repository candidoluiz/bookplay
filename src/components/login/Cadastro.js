import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

class Cadastro extends Component {
  render(){
  return (
    <div className='content'>
        <div id="cadastro">
            <form method="post" action=""> 
                <h1>Cadastro</h1> 
                
                <p> 
                    <label for="nome_cad">Seu nome</label>
                    <input id="nome_cad" name="nome_cad" required="required" type="text"/>
                </p>
                
                <p> 
                    <label for="email_cad">Usuário</label>
                    <input id="email_cad" name="email_cad" required="required" type="email"/> 
                </p>
                
                <p> 
                    <label for="senha_cad">Senha</label>
                    <input id="senha_cad" name="senha_cad" required="required" type="password"/>
                </p>
                
                <p> 
                    <input type="submit" value="Cadastrar"/> 
                </p>
                
                <p class="link">  
                    Já tem conta?
                    <Link to="/">Ir para Login</Link>
                </p>
            </form>
        </div>
    </div>
  );
}
}

export default Cadastro;


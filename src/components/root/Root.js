import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import  Header  from '../header/Header';
import  Menu  from '../menu/Menu';
import Card from '../card/Card';
import Login from '../login/Login';
import Cadastro from '../login/Cadastro';
import Home from '../home/Home';


class Root extends Component {
  render(){
  return (
    <div className="">   
        <main>
            <Switch>
                <Route exact path="/"><Login/></Route>
                <Route path="/cadastro"> <Cadastro/></Route>
                <Route path="/home"> <Home/></Route>
                <Card/>
            </Switch>
        </main>
    </div>
  );
}
}

export default Root;

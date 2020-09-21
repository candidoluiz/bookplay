import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import  Header  from '../header/Header';
import  Menu  from '../menu/Menu';
import Card from '../card/Card';
import Login from '../login/Login';
import Cadastro from '../login/Cadastro';
import './Home.css';

class Home extends Component {
  render(){
  return (
    <div className="">
        <Menu/>        
        <Header/>
        <main>
            <Switch>
                <Route exact path="/home/livros"> <Card pagina={"1"} /></Route>
                <Route path="/home/cursos"> <Card pagina={"2"}/></Route>
                <Route path="/home/videos"> <Card pagina={"3"}/></Route>
                <Route path="/home/banca"> <Card pagina={"5"}/></Route>
                <Route path="/home/audiobooks"> <Card pagina={"6"}/></Route>
                <Card/>
            </Switch>
        </main>
    </div>
  );
}
}

export default Home;

import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import  Header  from '../header/Header';
import  Menu  from '../menu/Menu';
import Card from '../card/Card';
import './Home.css';

class Home extends Component {
  render(){
  return (
    <div className="">
        <Header/>
        <Menu/>        
        <main>
            <Switch>
                <Route path="/teste"> <Card/></Route>
                <Card/>
            </Switch>
        </main>
    </div>
  );
}
}

export default Home;

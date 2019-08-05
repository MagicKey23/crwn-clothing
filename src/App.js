import React, {Component} from 'react';
import HomePage from './pages/homepage/home-page.component.jsx';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './component/header/header.component';


class App extends Component{
  render(){
    return (
    <div>
      <Header/>
      <Switch> 
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
    )
  }
}

export default App;

import React, {Component} from 'react';
import HomePage from './pages/homepage/home-page.component.jsx';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './component/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';

class App extends Component{
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
    })
  }
componentWillUnmount(){
  this.unsubcribeFromAuth();
}

  render(){
    return (
    <div>
      <Header currentUser= {this.state.currentUser}/>
      <Switch> 
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUp}></Route>
      
      </Switch>
    </div>
    )
  }
}

export default App;

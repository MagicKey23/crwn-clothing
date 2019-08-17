import React, {Component} from 'react';
import HomePage from './pages/homepage/home-page.component.jsx';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

class App extends Component{
  /*
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }
*/

  unsubcribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });

        });

      }

  setCurrentUser(userAuth);
    });
  }

componentWillUnmount(){
  this.unsubcribeFromAuth();
}

  render(){
    return (
    <div>
      <Header/>
      <Switch> 
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' render={()=> this.props.currentUser ? (<Redirect to ='/'/>): (SignInAndSignUp)}/>
      </Switch>
    </div>
    )
  }
}

const mapStateToProps = ({user})=> ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
 
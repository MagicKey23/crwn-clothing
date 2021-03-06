import React from 'react';
import './header.styles.scss';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
const Header = ({currentUser, hidden}) =>(
    <div className = 'header'>
        <Link className = 'logo-=container'to ="/">
            <Logo className='logo'></Logo>
        </Link>
    <div className="options">
        <Link className='option' to='shop'>Shop</Link>
        <Link className='option' to='shop'>Contact</Link>
        {
          currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )
        }
    <CartIcon/>
    </div>
    {
      hidden ? null : 
    <CartDropdown/>
    }
    </div>
);


const mapStateToProps = ({user:{currentUser}, cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
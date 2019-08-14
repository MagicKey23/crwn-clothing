import React from 'react';
import SignIn from '../../component/signin/sign-in.component'
import SignUp from '../../component/sign-up/signup.component'
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)
export default SignInAndSignUpPage;
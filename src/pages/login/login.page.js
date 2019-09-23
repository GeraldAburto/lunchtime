import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const LoginPage = () => {
    return (
        <div className="row">
            <div className="col s5">
                <SignIn />
            </div>
            <div className="col s7">
                <SignUp />
            </div>
        </div>
    );
};

export default LoginPage;
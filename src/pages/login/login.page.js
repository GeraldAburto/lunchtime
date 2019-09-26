import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';

const LoginPage = () => {
    return (
        <div className="row">
            <div className="card-panel col s4 offset-s4">
                <SignIn />
            </div>
        </div>
    );
};

export default LoginPage;
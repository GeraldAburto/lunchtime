import React from 'react';
import { Link } from 'react-router-dom';
import './sign-up.styles.css';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='row center sigup'>
                <div className="title col s12">
                    <h4>Create Account</h4>
                </div>
                <form action="" className='col s12'>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" id="username" name='username' onChange={this.handleOnChange} className="validate" required />
                            <label htmlFor="username">Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="email" id="email" name='email' onChange={this.handleOnChange} className="validate" required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" id="password" name='password' onChange={this.handleOnChange} className="validate" required />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className='input-field col s12'>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Sign up
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                        <div className="input-field col s12">
                            <p>or</p>
                            <br />
                            <button className="waves-effect waves-light btn" type='button'>Sign Up with Google</button>
                        </div>
                    </div>
                </form>
                <div className="col s12">
                    <Link to='/login'>Already have an account? sign in</Link>
                </div>
            </div>
        );
    }

}

export default SignUp;
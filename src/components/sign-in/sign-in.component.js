import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleOnChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='row center sigin'>
                <div className="title col s12">
                    <h4>Welcome Back!</h4>
                    <p>Sign in with your personal info.</p>
                </div>
                <form action="" className='col s12'>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="email" id="email" name='email' onChange={this.handleOnChange} className="validate" required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" id="email" name='password' onChange={this.handleOnChange} className="validate" required />
                            <label htmlFor="email">Password</label>
                        </div>
                        <div className='input-field col s12'>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Sign in
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                        <div className="input-field col s12">
                            <p>or Connect with Social Media.</p>
                            <br/>
                            <button className="waves-effect waves-light btn" type='button'>Sign in with Google</button>
                        </div>
                    </div>
                </form>
                <div className="col s12">
                    <Link to='/register'>Create an account.</Link>
                </div>
            </div>
        );
    }

}

export default SignIn;
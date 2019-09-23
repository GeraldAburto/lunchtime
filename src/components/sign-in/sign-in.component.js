import React from 'react';

class SignIn extends React.Component {
    constructor(){
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

    render(){
        return(
            <div>
                <form action="">
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="email" id="email" name='email' onChange={this.handleOnChange} className="validate" required/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" id="email" name='password' onChange={this.handleOnChange} className="validate" required/>
                            <label htmlFor="email">Password</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default SignIn;
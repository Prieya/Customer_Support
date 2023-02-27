import React, {Component} from 'react';
import './logIn.css';
//Nj1L6Ty8JRdhF2qL
//mongodb+srv://user:<password>@calender.tarsclc.mongodb.net/?retryWrites=true&w=majority
class Login extends Component {
    render(){
        return(
            <div className="wrapper">
            <div className="blurr"></div>
                <div className="logIn">
                    <div className="AccountLabel">
                        <div>
                            <h1>Log In</h1>
                        </div>
                    </div>
                    <form action="" className="logInForm" onSubmit={this.handleSubmit} >
                        <div className="emailWrapper">
                            <label type="email">Email:</label>
                            <input type="email" name="email"></input>
                        </div>
                        <div className="passwordWrapper">
                            <label for="password">Password:</label>
                            <input type="password" name="password"></input>
                        </div>

                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
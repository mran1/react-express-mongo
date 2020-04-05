import React from 'react';
import {connect} from 'react-redux';
import * as mutations from '../store/mutations';
const Login = ({authenticateUser, authenticated}) => (
    <div>
        <h2>Login here!</h2>
        <form onSubmit={authenticateUser}>
            <input type="text" placeholder="enter username" name="userName"/>
            <input type="password" placeholder="enter password" name="password"/>
            <button type="submit">Login</button>
            {authenticated === mutations.NOT_AUTHENTICATED ? <p>Incorrect credentials</p> : null}
        </form>
    </div>

)
const mapStateToProps = ({session}) => {
    return{
        authenticated : session.authenticated
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        authenticateUser(e) {
            e.preventDefault();
            let userName = e.target["userName"].value;
            let password = e.target["password"].value;
            console.log("userName", userName)
            dispatch(mutations.requestAuthenticateUser(userName, password));
        }
    }
}

export const LoginConnector = connect(mapStateToProps, mapDispatchToProps)(Login);
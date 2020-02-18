import React from 'react';
import {connect} from 'react-redux';
const Login = ({authenticateUser}) => (
    <div>
        <h2>Login here!</h2>
        <form submit={authenticateUser}>
            <input type="text" placeholder="enter username" value="userName"/>
            <input type="password" placeholder="enter password" value="password"/>
            <button type="submit">Login</button>
        </form>
    </div>

)
const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => {
    return {
        authenticateUser:(e) => {
        const userName = e.target["userName"].value;
        const password = e.target["password"].value;
        dispatch(authenticateUser(userName,password));

        
    }}
}

export const LoginConnector = connect(mapStateToProps)(Login);
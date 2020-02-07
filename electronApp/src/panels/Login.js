import React, { Component } from 'react';
import LoginForm from '../components/forms/LoginForm';

class Login extends Component {
    render() {
        return(
            <div style={styles.wrapper}>
                <LoginForm />
            </div>
        )
    }
}

export default Login
const styles = {
    wrapper: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    }
}
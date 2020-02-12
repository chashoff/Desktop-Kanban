import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
    render() {
        return(
            <div style={styles.wrapper}>
                <LoginForm />
            </div>
        )
    }
}

export default LoginPage
const styles = {
    wrapper: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    }
}
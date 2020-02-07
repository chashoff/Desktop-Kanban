import React, { Component } from 'react'
import SignUpForm from '../components/forms/SignUpForm'

class SignUp extends Component {
    render() {
        return(
            <div style={styles.wrapper}>
                <SignUpForm />
            </div>
        )
    }
}
export default SignUp
const styles = {
    wrapper: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    }
}
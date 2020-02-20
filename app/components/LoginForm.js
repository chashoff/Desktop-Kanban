import React from 'react';
import TextField from '@material-ui/core/TextField';
import SVGLogo from '../images/SVGLogo';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, NavLink } from 'react-router-dom';

const LoginForm = () => (
    <div style={styles.container}>
        <div style={styles.logoWrapper}>
            <SVGLogo style={styles.logo} />
        </div>
        <h2 style={{ color: 'lightgrey', textAlign: 'center', fontSize: '24px', paddingBottom: '.25em', fontWeight: '100'}}>Login</h2>
        <p style={{ textAlign: 'center', padding: '.50em 0 .75em 0'}}>Don't have an account? Sign up <Link style={styles.link} to="/signup">here</Link>!</p>
        <form style={styles.form}>
            <TextField style={styles.input} label="Username" variant="outlined" />
            <TextField style={styles.input} label="Password" variant="outlined" />
            <div style={styles.checkboxContainer}>
                <p style={{ fontSize: '.8em' }}>Would you like to stay signed in?</p>
                <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            </div>
            <NavLink to="/dashboard">
                <button style={styles.button}>Login</button>
            </NavLink>
        </form>
    </div>
)
export default LoginForm

const styles = {
    container: {
        margin: '0 auto',
        padding: '1.5em',
        backgroundColor: '#393737',
        width: '30%',
        minWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        boxShadow: '0px 0px 13px 2px rgba(0,0,0,0.75)'
    },
    logoWrapper: {
        display: 'block',
        margin: '1em auto'
    },
    logo: {
        height: '120px auto',
    },
    form: {
        width: '100%',
    },
    input: {
        width: '100%',
        padding: '0 0 .75em 0'
    },
    button: {
        width: '100%',
        padding: '.75em',
        borderRadius: '4px',
        backgroundColor: '#00FDDC',
        color: 'white'
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        color: 'lightgrey',
        textDecoration: 'underline'
    }
}
import React from 'react';
import TextField from '@material-ui/core/TextField';
import SVGLogo from '../../images/SVGLogo';

const LoginForm = () => (
    <div style={styles.container}>
        <SVGLogo style={styles.logo} />
        <form>
            <TextField label="Username" variant="outlined" />
        </form>
    </div>
)
export default LoginForm

const styles = {
    container: {
        margin: 'auto auto',
        padding: '1.5em',
        backgroundColor: '#393737',
        width: '30%',
        minWidth: '400px',
        display: 'flex',
        flexDirection: 'column'
    },
    logo: {
        display: 'flex',
        height: '120px auto',
        justifyContent: 'center'
    }
}
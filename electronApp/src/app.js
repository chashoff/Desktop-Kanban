import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00FDDC',
            dark: '#E5E5E5'
        },
        secondary: {
            main: '#1A936F',
            light: '#88D498',
            superLight: '#C6DABF'
        },
    }
})

class App extends Component {
    
    render() {
        return(
            <MuiThemeProvider theme={theme}>
                <div style={styles.container}>
                    <Router>
                        <Routes />
                    </Router>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default App

const styles = {
    container: {
        backgroundColor: '#585858',
        height: '100vh'
    }
}
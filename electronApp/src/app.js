import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#114B5F'
        },
        secondary: {
            main: '#1A936F',
            light: '#88D498',
            superLight: 'C6DABF'
        },
    }
})

class App extends Component {
    
    render() {
        return(

            <MuiThemeProvider theme={theme}>
                <Router>
                    <Routes />
                </Router>
            </MuiThemeProvider>
        )
    }
}
export default App
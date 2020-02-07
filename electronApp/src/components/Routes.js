import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../panels/Login'

class Routes extends Component {
    render() {
        // return <Login />
        return(
            <Switch>
                <Route exact path='/' component={Login} />
            </Switch>
        )
    }
}
export default Routes
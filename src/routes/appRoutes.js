import React from 'react'
import { Switch, Route} from "react-router-dom"
import { Login } from '../containers/login/index'
import { Dashboard } from '../containers/dashboard/index'
import  { Authenticate } from '../containers/login/card/authorize'
export const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/authenticate" component={Authenticate} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    )
}
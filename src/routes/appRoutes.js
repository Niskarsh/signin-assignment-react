import { Switch, Route} from "react-router-dom"
import { Login } from '../containers/login/index'
import { Dashboard } from '../containers/dashboard/index'
export const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    )
}
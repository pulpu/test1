import React, {Component} from 'react'
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import App from './App'
import test from './components/test'
import noMatch from './components/noMatch'

class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/test" component={test}/>
                    <Route component={noMatch}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Router;

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LoginWithContext, HomeWithContext, LoginWithRedux, HomeWithRedux } from './pages';

function Routes() {
    const store = process.env.REACT_APP_STORE;
    return(
        <BrowserRouter>
            {
                store === 'redux' ?
                <Switch>
                    <Route exact path="/loginWithRedux" component={LoginWithRedux} />
                    <Route exact path="/homeWithRedux" component={HomeWithRedux} />
                    <Redirect to="/loginWithRedux"/>
                </Switch> :
                <Switch>
                    <Route exact path="/loginWithContext" component={LoginWithContext} />
                    <Route exact path="/homeWithContext" component={HomeWithContext} />
                    <Redirect to="/loginWithContext"/>
                </Switch>
            }

        </BrowserRouter>
    )    
}

export default Routes;
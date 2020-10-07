import React from 'react'
import { Switch, Route } from 'react-router-dom'

import loadable from 'react-loadable'

import constants from '../constants'
const { ROUTES } = constants

const LoadingComponent = () => <h3>please wait...</h3>
const AsyncAbout = loadable({
    loader: () => import('../components/about'),
    loading: LoadingComponent
})

const AsyncHome = loadable({
    loader: () => import('../components/home'),
    loading: LoadingComponent
})

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path={ROUTES.ABOUT} component={AsyncAbout} />
            <Route path={ROUTES.HOME} component={AsyncHome} />
        </Switch>
    )
}

export default Routes
import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import * as Page from '../Components'
import RouteFunction from './RouteFunction'

export default function Index() {
    
    return (
        <Switch>
            {RouteFunction(Page)}
            <Redirect to='/' from="*" />
        </Switch>
    )
}
import React from 'react'
import { Route, Switch } from 'react-router'
import Login from './Login'
import SignUp from './SignUp'
const Auth = (props) => {
   const { match :{ path } } = props
   console.log(path)
    return (
            <div>
                <Switch>
                    <Route path={`${path}/login`} component={Login} />
                    <Route path={`${path}/signup`} component={SignUp} />
                </Switch>
            </div>

    )
}

export default Auth

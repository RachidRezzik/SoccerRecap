import React from 'react'
import {
    Route,
    Switch, 
    NavLink,
    Redirect
} from 'react-router-dom'
import Bayern_1 from './bayern/2000_01'
import Bayern_2 from './bayern/2012_13'
import Bayern_3 from './bayern/2019_20'




const Bayern = ({match}) => {
    return (
        <div>
            <div className="years_nav">
                <NavLink to={`${match.url}/2019_20`}>2019-20</NavLink>
                <NavLink to={`${match.url}/2012_13`}>2012-13</NavLink>
                <NavLink to={`${match.url}/2000_01`}>2000-01</NavLink>
            </div>
            <Switch>
                <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/2019_20`} />} />
                <Route path={`${match.path}/2019_20`} component={Bayern_3} />
                <Route path={`${match.path}/2012_13`} component={Bayern_2} />
                <Route path={`${match.path}/2000_01`} component={Bayern_1} />
            </Switch>
        </div>
        
    )
}

export default Bayern
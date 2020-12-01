import React from 'react'
import {
    Route,
    Switch, 
    NavLink,
    Redirect
} from 'react-router-dom'
import ronaldo_1 from './ronaldo/2008'
import ronaldo_2 from './ronaldo/2013'
import ronaldo_3 from './ronaldo/2014'
import ronaldo_4 from './ronaldo/2016'
import ronaldo_5 from './ronaldo/2017'


const Ronaldo = ({match}) => {
    return (
        <div>
            <div className="years_nav">
                <NavLink to={`${match.url}/2017`}>2017</NavLink>
                <NavLink to={`${match.url}/2016`}>2016</NavLink>
                <NavLink to={`${match.url}/2014`}>2014</NavLink>
                <NavLink to={`${match.url}/2013`}>2013</NavLink>
                <NavLink to={`${match.url}/2008`}>2008</NavLink>
            </div>
            <Switch>
                <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/2017`} />} />
                <Route path={`${match.path}/2017`} component={ronaldo_5} />
                <Route path={`${match.path}/2016`} component={ronaldo_4} />
                <Route path={`${match.path}/2014`} component={ronaldo_3} />
                <Route path={`${match.path}/2013`} component={ronaldo_2} />
                <Route path={`${match.path}/2008`} component={ronaldo_1} />
            </Switch>
        </div>
        
    )
}

export default Ronaldo
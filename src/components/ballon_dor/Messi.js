import React from 'react'
import {
    Route,
    Switch, 
    NavLink,
    Redirect
} from 'react-router-dom'
import messi_1 from './messi/2009'
import messi_2 from './messi/2010'
import messi_3 from './messi/2011'
import messi_4 from './messi/2012'
import messi_5 from './messi/2015'
import messi_6 from './messi/2019'


const Messi = ({match}) => {
    return (
        <div>
            <div className="years_nav">
                <NavLink to={`${match.url}/2019`}>2019</NavLink>
                <NavLink to={`${match.url}/2015`}>2015</NavLink>
                <NavLink to={`${match.url}/2012`}>2012</NavLink>
                <NavLink to={`${match.url}/2011`}>2011</NavLink>
                <NavLink to={`${match.url}/2010`}>2010</NavLink>
                <NavLink to={`${match.url}/2009`}>2009</NavLink>
            </div>
            <Switch>
                <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/2019`} />} />
                <Route path={`${match.path}/2019`} component={messi_6} />
                <Route path={`${match.path}/2015`} component={messi_5} />
                <Route path={`${match.path}/2012`} component={messi_4} />
                <Route path={`${match.path}/2011`} component={messi_3} />
                <Route path={`${match.path}/2010`} component={messi_2} />
                <Route path={`${match.path}/2009`} component={messi_1} />
            </Switch>
        </div>
        
    )
}

export default Messi
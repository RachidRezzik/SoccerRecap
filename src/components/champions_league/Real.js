import React from 'react'
import {
    Route,
    Switch, 
    NavLink,
    Redirect
} from 'react-router-dom'
import real_1 from './real/2001_02'
import real_2 from './real/2013_14'
import real_3 from './real/2015_16'
import real_4 from './real/2016_17'
import real_5 from './real/2017_18'


const Real = ({match}) => {
    return (
        <div>
            <div className="years_nav">
                <NavLink to={`${match.url}/2017_18`}>2017-18</NavLink>
                <NavLink to={`${match.url}/2016_17`}>2016-17</NavLink>
                <NavLink to={`${match.url}/2015_16`}>2015-16</NavLink>
                <NavLink to={`${match.url}/2013_14`}>2013-14</NavLink>
                <NavLink to={`${match.url}/2001_02`}>2001-02</NavLink>
            </div>
            <Switch>
                <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/2017_18`} />} />
                <Route path={`${match.path}/2017_18`} component={real_5} />
                <Route path={`${match.path}/2016_17`} component={real_4} />
                <Route path={`${match.path}/2015_16`} component={real_3} />
                <Route path={`${match.path}/2013_14`} component={real_2} />
                <Route path={`${match.path}/2001_02`} component={real_1} />
            </Switch>
        </div>
        
    )
}

export default Real
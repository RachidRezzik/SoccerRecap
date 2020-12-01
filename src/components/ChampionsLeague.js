import React from 'react'
import {
    Route,
    Switch, 
    NavLink,
    Redirect
} from 'react-router-dom'
import CL_Summary from './champions_league/CL_Summary'
import Real from './champions_league/Real'
import Barcelona from './champions_league/Barcelona'
import Bayern from './champions_league/Bayern'


const ChampionsLeague = ({match}) => {
    return (
        <div>
            <div className="world_cup_nav">
                <div className="wc_summary">
                    <NavLink to={`${match.url}/cl_summary`}>Summary</NavLink>
                </div>
                <div className="wc_winners_half">
                    <h2 id="winners">Frequent Winners</h2>
                    <div className="winners_nav">
                        <NavLink to={`${match.url}/Real`}>Real(5)</NavLink>
                        <NavLink to={`${match.url}/Barcelona`}>Barcelona(4)</NavLink>
                        <NavLink to={`${match.url}/Bayern`}>Bayern(3)</NavLink>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/cl_summary`} />} />
                <Route path={`${match.path}/cl_summary`} component={CL_Summary} />
                <Route path={`${match.path}/Real`} component={Real} />
                <Route path={`${match.path}/Barcelona`} component={Barcelona} />
                <Route path={`${match.path}/Bayern`} component={Bayern} />
            </Switch>
        </div>
        
    )
}

export default ChampionsLeague
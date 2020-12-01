import React from 'react'
import {
    Route,
    Switch, 
    NavLink,
    Redirect
} from 'react-router-dom'
import WC_Summary from './world_cup/WC_Summary'
import Brazil from './world_cup/Brazil'
import Italy from './world_cup/Italy'
import Spain from './world_cup/Spain'
import Germany from './world_cup/Germany'
import France from './world_cup/France'


const WorldCup = ({match}) => {
    return (
        <div>
            <div className="world_cup_nav">
                <div className="wc_summary">
                    <NavLink to={`${match.url}/wc_summary`}>Summary</NavLink>
                </div>
                <div className="wc_winners_half">
                    <h2 id="winners">WC Winners</h2>
                    <div className="winners_nav">
                        <NavLink to={`${match.url}/France`}>France</NavLink>
                        <NavLink to={`${match.url}/Germany`}>Germany</NavLink>
                        <NavLink to={`${match.url}/Spain`}>Spain</NavLink>
                        <NavLink to={`${match.url}/Italy`}>Italy</NavLink>
                        <NavLink to={`${match.url}/Brazil`}>Brazil</NavLink>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/wc_summary`} />} />
                <Route path={`${match.path}/wc_summary`} component={WC_Summary} />
                <Route path={`${match.path}/France`} component={France} />
                <Route path={`${match.path}/Germany`} component={Germany} />
                <Route path={`${match.path}/Spain`} component={Spain} />
                <Route path={`${match.path}/Italy`} component={Italy} />
                <Route path={`${match.path}/Brazil`} component={Brazil} />
            </Switch>
        </div>
        
    )
}

export default WorldCup
import React from 'react'
import {
    Route,
    Switch, 
    NavLink,
    Redirect
} from 'react-router-dom'
import BallonDorSummary from './ballon_dor/BallonDorSummary'
import Ronaldo from './ballon_dor/Ronaldo'
import Messi from './ballon_dor/Messi'



const BallonDor = ({match}) => {
    return (
        <div>
            <div className="world_cup_nav">
                <div className="wc_summary">
                    <NavLink to={`${match.url}/ballon_dor_summary`}>Summary</NavLink>
                </div>
                <div className="wc_winners_half">
                    <h2 id="winners">Frequent Winners</h2>
                    <div className="winners_nav">
                        <NavLink to={`${match.url}/Messi`}>Messi(6)</NavLink>
                        <NavLink to={`${match.url}/Ronaldo`}>Ronaldo(5)</NavLink>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/ballon_dor_summary`} />} />
                <Route path={`${match.path}/ballon_dor_summary`} component={BallonDorSummary} />
                <Route path={`${match.path}/Messi`} component={Messi} />
                <Route path={`${match.path}/Ronaldo`} component={Ronaldo} />
            </Switch>
        </div>
        
    )
}

export default BallonDor
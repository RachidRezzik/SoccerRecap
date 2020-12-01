import React from 'react'
import {
    Route,
    Switch, 
    NavLink,
    Redirect
} from 'react-router-dom'
import Barcelona_1 from './barcelona/2005_06'
import Barcelona_2 from './barcelona/2008_09'
import Barcelona_3 from './barcelona/2010_11'
import Barcelona_4 from './barcelona/2014_15'



const Barcelona = ({match}) => {
    return (
        <div>
            <div className="years_nav">
                <NavLink to={`${match.url}/2014_15`}>2014-15</NavLink>
                <NavLink to={`${match.url}/2010_11`}>2010-11</NavLink>
                <NavLink to={`${match.url}/2008_09`}>2008-09</NavLink>
                <NavLink to={`${match.url}/2005_06`}>2005-06</NavLink>
            </div>
            <Switch>
                <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/2014_15`} />} />
                <Route path={`${match.path}/2014_15`} component={Barcelona_4} />
                <Route path={`${match.path}/2010_11`} component={Barcelona_3} />
                <Route path={`${match.path}/2008_09`} component={Barcelona_2} />
                <Route path={`${match.path}/2005_06`} component={Barcelona_1} />
            </Switch>
        </div>
        
    )
}

export default Barcelona
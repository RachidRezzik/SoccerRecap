import React from 'react'
import { NavLink } from 'react-router-dom'
import soccerBall from '../images/ball.png'

const Header = () => {
    return (
        <div className="main_nav">
            <div className="logo">
                <img className="soccer_ball" src={soccerBall} alt="course" />
                <h2><span id="four">4</span>SoccerFans</h2>
            </div>
            <ul className="nav_links">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/WorldCup">World Cup</NavLink></li>
                <li><NavLink to="/ChampionsLeague">Champions League</NavLink></li>
                <li><NavLink to="/BallonDor">Ballon d'Or</NavLink></li>
            </ul>      
        </div>
    )
}

export default Header

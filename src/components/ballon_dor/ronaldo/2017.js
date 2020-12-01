import React from 'react';
import goals_2017 from '../../../images/Ronaldo_2017_goals.JPG'
import ronaldo_2017 from '../../../images/Ronaldo_2017.jpg'


const Ronaldo_5 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2017</h1>
        <img className="team_img" src={ronaldo_2017} alt="" />
        <h2>2017 Goals (Club-Only)</h2>
        <img style={{width:"100%", height:"60px", maxWidth:"325px"}} src={goals_2017} alt="" />
        <h3 style={{textDecoration: "underline"}}>Major Achievements:</h3>
        <h4>Champions League, La Liga</h4>
    </div>
);

export default Ronaldo_5;
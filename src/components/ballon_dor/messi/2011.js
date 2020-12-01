import React from 'react';
import goals_2011 from '../../../images/Messi_2011_goals.JPG'
import messi_2011 from '../../../images/Messi_2011.jpg'


const Messi_3 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2011</h1>
        <img className="team_img" src={messi_2011} alt="" />
        <h2>2011 Goals (Club-Only)</h2>
        <img style={{width:"100%", height:"60px", maxWidth:"325px"}} src={goals_2011} alt="" />
        <h3 style={{textDecoration: "underline"}}>Major Achievements:</h3>
        <h4>Champions League, La Liga</h4>
    </div>
);

export default Messi_3;
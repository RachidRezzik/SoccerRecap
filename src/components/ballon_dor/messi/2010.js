import React from 'react';
import goals_2010 from '../../../images/Messi_2010_goals.JPG'
import messi_2010 from '../../../images/Messi_2010.jpg'


const Messi_2 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2010</h1>
        <img className="team_img" src={messi_2010} alt="" />
        <h2>2010 Goals (Club-Only)</h2>
        <img style={{width:"100%", height:"60px", maxWidth:"325px"}} src={goals_2010} alt="" />
        <h3 style={{textDecoration: "underline"}}>Major Achievements:</h3>
        <h4>La Liga</h4>
    </div>
);

export default Messi_2;
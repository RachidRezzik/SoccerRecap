import React from 'react';
import goals_2015 from '../../../images/Messi_2015_goals.JPG'
import messi_2015 from '../../../images/Messi_2015.jpg'


const Messi_5 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2015</h1>
        <img className="team_img" src={messi_2015} alt="" />
        <h2>2015 Goals (Club-Only)</h2>
        <img style={{width:"100%", height:"60px", maxWidth:"325px"}} src={goals_2015} alt="" />
        <h3 style={{textDecoration: "underline"}}>Major Achievements:</h3>
        <h4>Champions League, La Liga, Copa Del Rey</h4>
    </div>
);

export default Messi_5;
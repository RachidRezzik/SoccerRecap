import React from 'react';
import goals_2012 from '../../../images/Messi_2012_goals.JPG'
import messi_2012 from '../../../images/Messi_2012.jpg'


const Messi_4 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2012</h1>
        <img className="team_img" src={messi_2012} alt="" />
        <h2>2012 Goals (Club-Only)</h2>
        <img style={{width:"100%", height:"60px", maxWidth:"325px"}} src={goals_2012} alt="" />
        <h3 style={{textDecoration: "underline"}}>Major Achievements:</h3>
        <h4>Copa Del Rey</h4>
    </div>
);

export default Messi_4;
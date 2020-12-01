import React from 'react';
import goals_2014 from '../../../images/Ronaldo_2014_goals.JPG'
import ronaldo_2014 from '../../../images/Ronaldo_2014.jpg'


const Ronaldo_3 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2014</h1>
        <img className="team_img" src={ronaldo_2014} alt="" />
        <h2>2014 Goals (Club-Only)</h2>
        <img style={{width:"100%", height:"60px", maxWidth:"325px"}} src={goals_2014} alt="" />
        <h3 style={{textDecoration: "underline"}}>Major Achievements:</h3>
        <h4>Champions League, Copa Del Rey</h4>
    </div>
);

export default Ronaldo_3;
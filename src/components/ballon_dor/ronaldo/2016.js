import React from 'react';
import goals_2016 from '../../../images/Ronaldo_2016_goals.JPG'
import ronaldo_2016 from '../../../images/Ronaldo_2016.jpg'


const Ronaldo_4 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2016</h1>
        <img className="team_img" src={ronaldo_2016} alt="" />
        <h2>2016 Goals (Club-Only)</h2>
        <img style={{width:"100%", height:"60px", maxWidth:"325px"}} src={goals_2016} alt="" />
        <h3 style={{textDecoration: "underline"}}>Major Achievements:</h3>
        <h4>Champions League, Euro (Portugal)</h4>
    </div>
);

export default Ronaldo_4;
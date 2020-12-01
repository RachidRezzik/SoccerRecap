import React from 'react';
import goals_2013 from '../../../images/Ronaldo_2013_goals.JPG'
import ronaldo_2013 from '../../../images/Ronaldo_2013.jpg'


const Ronaldo_2 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2013</h1>
        <img className="team_img" src={ronaldo_2013} alt="" />
        <h2>2013 Goals (Club-Only)</h2>
        <img style={{width:"100%", height:"60px", maxWidth:"325px"}} src={goals_2013} alt="" />
        <h3 style={{textDecoration: "underline"}}>Major Achievements:</h3>
        <h4>Copa Del Rey (Runner-Up)</h4>
    </div>
);

export default Ronaldo_2;
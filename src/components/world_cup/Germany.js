import React from 'react';
import germany_champ from '../../images/germany_champ.jpg'
import germany_11 from '../../images/germany_11.JPG'
import mueller from '../../images/mueller.jpg'

const Germany = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>Germany - 2014 </h1>
        <img className="team_img" src={germany_champ} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={germany_11} alt="" />
        <h2>Leading Scorer: Muller (5)</h2>
        <img className="team_img" src={mueller} alt="" />
    </div>
);



export default Germany;
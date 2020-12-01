import React from 'react';
import spain_champ from '../../images/spain_champ.jpg'
import spain_11 from '../../images/spain_11.JPG'
import villa from '../../images/villa.jpg'

const Spain = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>Spain - 2010 </h1>
        <img className="team_img" src={spain_champ} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={spain_11} alt="" />
        <h2>Leading Scorer: Villa (5)</h2>
        <img className="team_img" src={villa} alt="" />
    </div>
);


export default Spain;
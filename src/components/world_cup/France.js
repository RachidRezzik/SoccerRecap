import React from 'react';
import france_champ from '../../images/france_champ.jpg'
import france_11 from '../../images/france_11.JPG'
import griezmann from '../../images/griezmann.jpg'

const France = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>France - 2018 </h1>
        <img className="team_img" src={france_champ} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={france_11} alt="" />
        <h2>Leading Scorer: Griezmann (4)</h2>
        <img className="team_img" src={griezmann} alt="" />
    </div>
);



export default France;
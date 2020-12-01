import React from 'react';
import brazil_champ from '../../images/brazil.jpg'
import brazil_11 from '../../images/brazil_11.JPG'
import ronaldo from '../../images/ronaldo.jpg'

const Brazil = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>Brazil - 2002 </h1>
        <img className="team_img" src={brazil_champ} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={brazil_11} alt="" />
        <h2>Leading Scorer: Ronaldo (8)</h2>
        <img className="team_img" src={ronaldo} alt="" />
    </div>
);



export default Brazil;
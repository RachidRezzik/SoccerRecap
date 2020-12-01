import React from 'react';
import real_16 from '../../../images/Real_16.jpg'
import real_16_11 from '../../../images/Real_16_11.JPG'
import ronaldo_16 from '../../../images/Ronaldo_16.jpg'

const Real_3 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2015-16</h1>
        <img className="team_img" src={real_16} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={real_16_11} alt="" />
        <h2>Leading Scorer: Ronaldo (16)</h2>
        <img className="team_img" src={ronaldo_16} alt="" />
    </div>
);



export default Real_3;
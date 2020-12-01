import React from 'react';
import real_14 from '../../../images/Real_14.jpg'
import real_14_11 from '../../../images/Real_14_11.JPG'
import ronaldo_14 from '../../../images/Ronaldo_14.jpg'

const Real_2 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2013-14</h1>
        <img className="team_img" src={real_14} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={real_14_11} alt="" />
        <h2>Leading Scorer: Ronaldo (17)</h2>
        <img className="team_img" src={ronaldo_14} alt="" />
    </div>
);



export default Real_2;
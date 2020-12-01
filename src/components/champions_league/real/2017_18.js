import React from 'react';
import real_18 from '../../../images/Real_18.jpg'
import real_18_11 from '../../../images/Real_18_11.JPG'
import ronaldo_18 from '../../../images/Ronaldo_18.jpg'

const Real_5 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2017-18</h1>
        <img className="team_img" src={real_18} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={real_18_11} alt="" />
        <h2>Leading Scorer: Ronaldo (15)</h2>
        <img className="team_img" src={ronaldo_18} alt="" />
    </div>
);



export default Real_5;
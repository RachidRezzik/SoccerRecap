import React from 'react';
import bayern_13 from '../../../images/Bayern_13.jpg'
import bayern_13_11 from '../../../images/Bayern_13_11.JPG'
import muller_13 from '../../../images/muller_13.jpg'

const Bayern_2 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2012-13</h1>
        <img className="team_img" src={bayern_13} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={bayern_13_11} alt="" />
        <h2>Leading Scorer: Muller (8)</h2>
        <img className="team_img" src={muller_13} alt="" />
    </div>
);



export default Bayern_2;
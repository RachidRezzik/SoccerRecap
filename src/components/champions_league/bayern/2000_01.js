import React from 'react';
import bayern_01 from '../../../images/Bayern_01.jpg'
import bayern_01_11 from '../../../images/Bayern_01_11.JPG'
import eder_01 from '../../../images/elber_01.jpg'

const Bayern_1 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2000-01</h1>
        <img className="team_img" src={bayern_01} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={bayern_01_11} alt="" />
        <h2>Leading Scorer: Elber (6)</h2>
        <img className="team_img" src={eder_01} alt="" />
    </div>
);


export default Bayern_1;
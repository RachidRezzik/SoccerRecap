import React from 'react';
import bayern_20 from '../../../images/Bayern_20.jpg'
import bayern_20_11 from '../../../images/Bayern_20_11.JPG'
import eder_20 from '../../../images/lewandowski_20.jpg'

const Bayern_3 = () => (
    <div className="team_div" style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2019-20</h1>
        <img className="team_img" src={bayern_20} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={bayern_20_11} alt="" />
        <h2>Leading Scorer: Lewandowski (15)</h2>
        <img className="team_img" src={eder_20} alt="" />
    </div>
);



export default Bayern_3;
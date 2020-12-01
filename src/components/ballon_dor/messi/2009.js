import React from 'react';
import messi_2009 from '../../../images/Messi_2009.jpg'


const Messi_1 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2009</h1>
        <img className="team_img" src={messi_2009} alt="" />
        <h2>2009 Goals (Club-Only)</h2>
        <h4>N/A</h4>
        <h3 style={{textDecoration: "underline"}}>Major Achievements:</h3>
        <h4>Champions League, La Liga, Copa Del Rey</h4>
    </div>
);

export default Messi_1;
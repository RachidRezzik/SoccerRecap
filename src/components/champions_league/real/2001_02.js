import React from 'react';
import real_02 from '../../../images/Real_02.jpg'
import real_02_11 from '../../../images/Real_02_11.JPG'
import raul_02 from '../../../images/Raul_02.jpg'

const Real_1 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2001-02</h1>
        <img className="team_img" src={real_02} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={real_02_11} alt="" />
        <h2>Leading Scorer: Raul (6)</h2>
        <img className="team_img" src={raul_02} alt="" />
    </div>
);



export default Real_1;
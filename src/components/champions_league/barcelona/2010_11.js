import React from 'react';
import barcelona_11 from '../../../images/Barcelona_11.jpg'
import barcelona_11_11 from '../../../images/Barcelona_11_11.JPG'
import messi_11 from '../../../images/Messi_11.jpg'

const Barcelona_3 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2010-11</h1>
        <img className="team_img" src={barcelona_11} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={barcelona_11_11} alt="" />
        <h2>Leading Scorer: Messi (12)</h2>
        <img className="team_img" src={messi_11} alt="" />
    </div>
);



export default Barcelona_3;
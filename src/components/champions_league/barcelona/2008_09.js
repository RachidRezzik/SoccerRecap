import React from 'react';
import barcelona_09 from '../../../images/Barcelona_09.jpg'
import barcelona_09_11 from '../../../images/Barcelona_09_11.JPG'
import messi_09 from '../../../images/Messi_09.jpg'

const Barcelona_2 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2008-09</h1>
        <img className="team_img" src={barcelona_09} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={barcelona_09_11} alt="" />
        <h2>Leading Scorer: Messi (9)</h2>
        <img className="team_img" src={messi_09} alt="" />
    </div>
);



export default Barcelona_2;
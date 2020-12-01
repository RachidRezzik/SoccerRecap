import React from 'react';
import barcelona_15 from '../../../images/Barcelona_15.jpg'
import barcelona_15_11 from '../../../images/Barcelona_15_11.JPG'
import messi_neymar_15 from '../../../images/messi_neymar.jpg'

const Barcelona_4 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2014-15</h1>
        <img className="team_img" src={barcelona_15} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={barcelona_15_11} alt="" />
        <h2>Leading Scorer: Messi & Neymar (10)</h2>
        <img className="team_img" src={messi_neymar_15} alt="" />
    </div>
);


export default Barcelona_4;
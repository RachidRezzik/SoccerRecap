import React from 'react';
import italy_champ from '../../images/italy_champ.jpg'
import italy_11 from '../../images/italy_11.JPG'
import toni_mat from '../../images/toni_materazzi.JPG'

const Italy = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>Italy - 2006 </h1>
        <img className="team_img" src={italy_champ} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={italy_11} alt="" />
        <h2>Leading Scorer: Toni & Materazzi (2)</h2>
        <img className="team_img" src={toni_mat} alt="" />
    </div>
);



export default Italy;
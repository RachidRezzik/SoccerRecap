import React from 'react';
import barcelona_06 from '../../../images/Barcelona_06.jpg'
import barcelona_06_11 from '../../../images/Barcelona_06_11.JPG'
import ronaldinho_06 from '../../../images/Ronaldinho_06.jpg'

const Barcelona_1 = () => (
    <div style={{textAlign: "center", padding: "10px 5%"}}>
        <h1>2005-06</h1>
        <img className="team_img" src={barcelona_06} alt="" />
        <h2>Starting Eleven</h2>
        <img className="team_img" src={barcelona_06_11} alt="" />
        <h2>Leading Scorer: Ronaldinho (7)</h2>
        <img className="team_img" src={ronaldinho_06} alt="" />
    </div>
);

export default Barcelona_1;
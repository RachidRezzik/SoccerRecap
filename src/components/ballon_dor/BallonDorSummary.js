import React from 'react';
import ballon_dor_trophy from '../../images/ballon_dor.png'
import Ballon_Dor_Winners from '../../images/Ballon_Dor_Winners.JPG'


const BallonDorSummary = () => {
    return (
        <div style={{textAlign: "center", padding: "10px 5%"}}>
            <h1 style={{textDecoration: "underline"}}>Ballon d'Or</h1>
            <img style={{textAlign: "center", width: "70px", height: "100px"}} src={ballon_dor_trophy} alt="world_cup" />
            <p style={{textAlign: "left", textIndent: "10px"}}>The Ballon d'Or represents professional soccer's most prestiguous individual award. Soccer journalists, coaches, and captains of national teams vote on who they believe was the most outstanding player each calendar year. </p>
            <p style={{textAlign: "left", textIndent: "10px"}}>
            The last twenty years saw Lionel Messi and Cristiano Ronaldo win the award a total of 11 times (55%). As a nation, Brazil contained the most individual winners with three (Kaka, Ronaldinho, Ronaldo).
            </p>
            <h3>Winners</h3>
            <img style={{width: "100%", maxWidth: "325px"}}src={Ballon_Dor_Winners} alt="" />

            

            

        </div>
    )
};

export default BallonDorSummary
import React from 'react';
import cl_trophy from '../../images/cl.png'
import cl_winners from '../../images/CL_Winners.JPG'
import cl_scores from '../../images/CL_scorers.JPG'
import cl_goals_game from '../../images/CL_goals_game.JPG'
import cl_group from '../../images/CL_group_stage.JPG'
import cl_knockout from '../../images/CL_knockout.JPG'
import cl_hat_trick from '../../images/CL_hat_trick.JPG'
import cl_hat_trick_season from '../../images/CL_hat_trick_season.JPG'


const CL_Summary = () => {
    return (
        <div style={{textAlign: "center", padding: "10px 5%"}}>
            <h1>Champions League</h1>
            <img style={{textAlign: "center", width: "70px", height: "100px"}} src={cl_trophy} alt="world_cup" />
            <p style={{textAlign: "left", textIndent: "10px"}}>Every season Europe's top clubs go head-to-head in soccer's most prestiguos club tournament. Most young soccer players around the world dream of winning the Champions League playing for a major club.</p>
            <p style={{textAlign: "left", textIndent: "10px"}}>
            The last twenty years saw Real Madrid (Spain), Barcelona (Spain), and Bayern Munich (Germany) win the title a total of 12 times (60%). 
            </p>
            <h3 style={{marginTop: "40px", textDecoration: "underline"}}>Winners/Leading Scorers</h3>
            <img style={IMGstyle} src={cl_winners} alt="" />
            <br></br>
            <h3 style={{marginTop: "60px", textDecoration: "underline"}}>Most Goals/Game by Team</h3>
            <img style={IMGstyle} src={cl_goals_game} alt="" />
            <br></br>
            <h3 style={{marginTop: "60px", textDecoration: "underline"}}>Player Goals Record By Stage</h3>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap: "wrap"}}>
                <div>
                    <h4>(Group Stage)</h4>
                    <img src={cl_group} alt="" />
                </div>
                <div>
                    <h4>(Knockout Stage)</h4>
                    <img src={cl_knockout} alt="" />
                </div>
            </div>
            <h3 style={{marginTop: "60px", textDecoration: "underline"}}>Hat-Trick Record</h3>
            <div>
                <h4>(All-Time)</h4>
                <img src={cl_hat_trick} alt="" />
            </div>
            <div>
                <h4>(One Season)</h4>
                <img src={cl_hat_trick_season} alt="" />
            </div>
            <h3 style={{marginTop: "60px", textDecoration: "underline"}}>All-Time Leading Scorers</h3>
            <img src={cl_scores} alt="" />
        </div>
    )
};

const IMGstyle = {
    width: "100%", 
    maxWidth: "325px",
}

export default CL_Summary
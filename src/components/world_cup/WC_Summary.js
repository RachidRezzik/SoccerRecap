import React from 'react';
import wc_img from '../../images/world_cup.png'
import wc_win_img from '../../images/WC_winners.JPG'
import wc_goals from '../../images/WC_goals.JPG'
import wc_cards from '../../images/WC_cards.JPG'
import wc_golden from '../../images/WC_golden.JPG'

const WC_Summary = () => {
    return (
        <div style={{textAlign: "center", padding: "10px 5%"}}>
            <h1>The World Cup</h1>
            <img style={{textAlign: "center", width: "70px", height: "100px"}} src={wc_img} alt="world_cup" />
            <p style={{textAlign: "left", textIndent: "10px"}}>Every four years the world watches the top nations from each continent go at it in a breathtaking tournament where there can only be one victor. Fans from around the world travel or tune in from home to experience the passion of the World Cup. I, like many, hope to be able to attend a World Cup match one day!</p>
            <h3 style={{marginTop: "40px", textDecoration: "underline"}}>Champions of the World</h3>
            <img style={IMGstyle}src={wc_win_img} alt="" />
            <h3 style={{marginTop: "60px", textDecoration: "underline"}}>Goal Scoring</h3>
            <img style={{width: "100%", maxWidth: "325px", height: "225px"}} src={wc_goals} alt="" />
            <h3 style={{marginTop: "60px", textDecoration: "underline"}}>Intensity/Fouling</h3>
            <img style={IMGstyle} src={wc_cards} alt="" />
            <h3 style={{marginTop: "60px", textDecoration: "underline"}}>Best Player</h3>
            <img style={IMGstyle} src={wc_golden} alt="" />

        </div>
    )
};

const IMGstyle = {
    width: "100%", 
    maxWidth: "325px",
    height: "175px"
}



export default WC_Summary;
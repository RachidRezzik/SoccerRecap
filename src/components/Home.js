import React from 'react'

const Home = () => {
    return (
        <div style={{textAlign: "center", padding: "50px 5%"}}>
            <h1>Welcome, Soccer Fans!</h1>
            <p style={pStyle}>Though the beautiful game has blessed us fans for many years, I thought I'd specifically focus on the past twenty for this project. 
            </p>  
            <p style={pStyle}>
            Please browse this single page app I've developed utilizing React JS to dig deeper into some statistics for the World Cup, Champions League, and Ballon d'Or!
            </p>
        </div>
    )
}

const pStyle = {
    textAlign: "left",
    textIndent: "15px",
    fontSize: "20px"
}

export default Home
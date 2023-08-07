import React from "react"


export default function Home() {
    

    return (
        <div style={{ padding: 20 }} className="bg-dark">
            <h1 className="welcome">Welcome to Pablo's Vehicles... the best in the galaxy!</h1>
            <br></br>
            <br></br>
            <br></br>
            <img className="img-fluid rounded mx-auto d-block custom-img" src="./nalhutta2.jpeg"></img>
            
            <div className="intro-div mx-10">
           
</div>


            <p className="trade custom-home">Got some credits burning a hole in your pocket, but not sure where to start?  Take our <a href="/quiz" className="warning">quiz</a> and we'll let you know of our available inventory what we think will be the best match!</p>
            <br></br>
            <p className="trade">I know what I want.  Take me straight to your online <a href="/inventory" className="warning"> showroom. </a></p>
        </div>
    )
}
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    return (
        <div style={{ padding: 20 }} className="bg-dark">
            <h1 className="welcome">Welcome to Pablo's Vehicles... the best in the galaxy!</h1>
            <br></br>
            <br></br>
            <br></br>
            <img className="img-fluid rounded mx-auto d-block custom-img" src="./nalhutta2.jpeg"></img>
            
            <div className="intro-div mx-10">
            <p className="trade px-10 custom-home">You may know Pablo from his humble beginnings as a pawn shop owner on Nal Hutta.  He has recently opened Pablo's Vehicles, the premier vehicle dealer in the galaxy!
At Pablo's Vehicles, we specialize in providing the best vehicles from all corners of the galaxy to our customers. Whether you're a Jedi in need of a reliable vehicle to travel to remote planets or a wealthy collector looking for something rare and unique, we have something for everyone.
Our selection of vehicles is unmatched in the galaxy, with a wide variety of ships, speeders, and other vehicles to choose from. We work directly with manufacturers and private collectors to bring you the highest quality vehicles at the best prices.
Our experienced team of vehicle experts is dedicated to helping you find the perfect vehicle for your needs. We understand that every customer is unique, and we take the time to listen to your needs and preferences to help you find the vehicle that's right for you.
So whether you're a seasoned pilot or a first-time buyer, come visit us at Pablo's and see what we have to offer. Our showroom is located in the Outer Rim on Nal Hutta, but we believe you'll find we are worth the trip. Our friendly staff is always ready to help you find the vehicle of your dreams.
</p>
</div>


            <p className="trade">Got some credits burning a hole in your pocket, but not sure where to start?  Take our <a href="/quiz" className="warning">quiz</a> and we'll let you know of our available inventory what we think will be the best match!</p>
            <br></br>
            <p className="trade">I know what I want.  Take me straight to your online <a href="/inventory" className="warning"> showroom. </a></p>
        </div>
    )
}
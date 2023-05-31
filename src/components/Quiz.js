import React from "react"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import { VehicleContext } from "../App";
import Card from "./Card";

export default function Quiz() {
    const navigate = useNavigate()
    const {allVehicles, setAllVehicles} = useContext(VehicleContext)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [filteredVehicles, setFilteredVehicles] = useState([])
    const [inputData, setInputData] = useState({})
    const [show, setShow] = useState(false)
    
    
   
    const handleInputChange = (e) => {
        setInputData((prevData) => ({...prevData, [e.target.name]: e.target.value}))
       }

    

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputData)
        const filteredVehicles = allVehicles.filter((vehicle) => {
        console.log(vehicle)

        const isInCost =    vehicle.cost_in_credits <= inputData.price
        const canHaulCargo = vehicle.canHaulCargo === inputData.cargo
        const canTravel = vehicle.interplanetaryTravel === inputData.travel
        return isInCost && canHaulCargo && canTravel
        })
        
        setFilteredVehicles(filteredVehicles)
        setIsSubmitted(true)
        
        
    }
        console.log(filteredVehicles)
        console.log(isSubmitted)

        console.log(inputData)


    const isDisabled = !(inputData.price && inputData.cargo && inputData.travel)
    
    return (
            
             <div className="bg-dark py-3 text-center">
                <h3 className="trade display-6 quiz-headline">
                Not sure exactly what you're looking for?  Take our quiz and we'll match you up with your dream ride!
                </h3>
                <br></br>
                <img className="img-fluid rounded mx-auto d-block" src="./NalHutta.webp"></img>
                <br></br>
                <br></br>
                <p className="text-center trade">How many credits are you willing to spend?</p>
                <label className="trade">(10,000 - 300,000)</label>
                <br></br>
                <input min ={10000} max={300000} type="range" className="trade" name="price" value={inputData.price} onChange = {handleInputChange}/>{inputData.price}
                <br></br>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <label className="text-center trade px-5">Are you looking to haul some cargo?</label>
                    <br></br>
                    <br></br>
                    <select 
                    
                        id="cargo" 
                        value={inputData.cargo} 
                        onChange={handleInputChange}
                        name="cargo"
                        >
                            <option value="">--Choose--</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                    </select>
                    <br></br>
                    <br></br>
                    <br></br>
                

                    <label className="text-center trade">Are you planning interplanetary travel?</label>
                    <br></br>
                    <br></br>
                    <select 
                        id="travel" 
                        value={inputData.travel} 
                        required={true}
                        onChange = {handleInputChange}
                        name="travel"
                    >
                    <option value="">--Choose--</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                    </select>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <button disabled={isDisabled} onClick={handleSubmit} className="btn btn-secondary">Submit</button>
                </form>
                {isSubmitted && filteredVehicles.length === 0 && (
                <h5 className="trade py-5"> No vehicles found. Please refine your search criteria. </h5>
               )}

                {isSubmitted && filteredVehicles.length > 0 && (
                    <div className="bg-dark py-5 text-center">{filteredVehicles.map((vehicle, idx) => (
                        <Card key={vehicle.name} vehicle={vehicle} />
               ))}
                    </div>
               )  
                        
                    }
            
        </div>
        
    
    )
}
            
               
        
        
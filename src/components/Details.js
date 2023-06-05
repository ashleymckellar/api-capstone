import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { VehicleContext } from "../App";
import CustomModal from './Modal'

export default function Details() {
    const { vehicleName } = useParams()
    const [foundVehicle, setFoundVehicle] = useState()
    const [showForm, setShowForm ] = useState(false)
    const {allVehicles} = useContext(VehicleContext)
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        holo: ""
    })
    

    const handleChange = (e) => {
        setFormData((prevFormData) => ({...prevFormData, [e.target.name]: e.target.value}))
        
        
    }

    const handleOpenModal = () => {
        
        setShowModal(true)
        setFormData({
            name: "",
            holo: ""
        })
        
    };
    const handleCloseModal = () => {
        setShowModal(false)
    }
    
    useEffect(() => {
        const vehicle = allVehicles.find((v)=> v.name === vehicleName)
        setFoundVehicle(vehicle)

    }, [allVehicles, setFoundVehicle])

    //this finds the vehicle that matches the name from the route, calls setFoundVehicle on it
    //this function will run any time all vehicles change, it calls setFoundVehicle


    const handleClick = () => {
        setShowForm(true)
    }
    const regex = /^[0-9]+$/;

 //regex form validation for holo number, to ensure only a number is entered.  If letters are entered, submit button
    //remains greyed out
        
    const isDisabled = !(formData.name && formData.holo && regex.test(formData.holo))
   
    return (
        <div className="bg-dark py-5">
        <h3 className="welcome">{!!foundVehicle && foundVehicle.name}</h3>
        <h5 className="trade">Manufacturer: {!!foundVehicle && foundVehicle.manufacturer}</h5>
        <h5 className="trade">Cost(credits): {!!foundVehicle && foundVehicle.cost_in_credits}</h5>
        <h5 className="trade">Vehicle Class: {!!foundVehicle && foundVehicle.vehicle_class}</h5>
        <div className="img-container">
            <img className="img-fluid rounded mx-auto d-block details-img" src={!!foundVehicle && foundVehicle.imgUrl} />
        </div>
        <div className="text-center m-2 p-3">
        <h5 className="trade custom-home">{!!foundVehicle && foundVehicle.detailedDescription}</h5>
        </div>
        <div className="text-center">
        <button onClick={handleClick}className="btn btn-secondary">This is the vehicle I'm looking for.</button>
        
        {showForm ? (
            <form className="py-3">
                <label className="trade">
                    Name:
                <input 
                    type="text" 
                    name="name"
                    onChange={handleChange}
                    value={formData.name}/>
                </label>
                <label className="trade">
                    Holo number:
                <input 
                    type="tel" 
                    name="holo"
                    onChange={handleChange}
                    value={formData.holo}/>
                </label>
                <br></br>
                <div className="py-3">
                    <button onClick={handleOpenModal} disabled={isDisabled} className="btn btn-secondary py-10">Submit</button>
                </div>
                <CustomModal show={showModal} handleClose={handleCloseModal}/>
            </form>
        ) : null}
        </div>
        </div>
    )
}


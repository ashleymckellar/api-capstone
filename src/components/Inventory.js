import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Card from "./Card";
import { VehicleContext } from "../App";
export default function Inventory(props) {

    const {allVehicles} = useContext(VehicleContext)
    console.log(allVehicles)
    
    const navigate = useNavigate();
    const cards = allVehicles.map((vehicle, idx) => {
  
        return (
    
        <Card 
            key={vehicle.name}
            vehicle={vehicle}
        />
        )
        })
    
    return (
        <div>
        <header className="bg-dark py-5">
        <div className="trade">
            <h3 className="display-6">
                Explore our complete inventory of new and gently used vehicles
            </h3>
            </div>
        </header>
            <section className="bg-dark py-3">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {cards}
                    </div>
                </div>
            </section>
         </div>
        
    );
}

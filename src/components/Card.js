import React from "react"
import { useNavigate, } from "react-router-dom";

export default function Card(props) {

const navigate =useNavigate()


return (
    
       
               <div className="col-sm-3 col-lg-3 img-fluid rounded mx-auto d-block">
                    <div className="card col mb-5">
                        <div className="h-350">
                            <img src={props.vehicle.imgUrl} className="card-img-top"/> 
                                <div className="card-body p-4">
                                    <div className="text-center">
                                    <h5 className="fw-bolder"> {props.vehicle.name}</h5>
                                    <p className="card-text">Cost (credits): {props.vehicle.cost_in_credits}</p>
                                    </div>
                                 </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                    <a href="#" onClick={()=> navigate(`/details/${props.vehicle.name}`)}className="btn btn-secondary">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        
   
    

)
}
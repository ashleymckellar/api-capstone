import React, { useState, createContext, useEffect } from "react";
import Home from "./components/Home.js";
import CustomNavbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Quiz from "./components/Quiz.js";
import Details from "./components/Details.js";
import Inventory from "./components/Inventory.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VehicleData from "./VehicleData.json";
import axios from "axios";
import "./App.css";
import "./fonts/Starjout.ttf";

export const VehicleContext = createContext();

function App() {
    const [allVehicles, setAllVehicles] = useState([]);

    useEffect(() => {
        document.title = "Pablo's Vehicles";
    }, []);

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/vehicles")
            .then((response) => {
                const data = response.data.results;
                const vehiclesForSale = data
                    .filter((data) => data.cost_in_credits != "unknown")
                    .map((data) => {
                        return { ...data, ...VehicleData[data.name] };
                        //spreads in data from json file into the array
                    });
                    setAllVehicles(vehiclesForSale);
            })
            .catch((error) => console.log(error));
    }, []);

    //gets all vehicles from first page and filters out the ones without a price in credits.  Save this array as vehiclesForSale
//setAllVehicles is called on vehiclesForSale, which saves it to state variable, allVehicles
//useEffect empty array as dependency means it will only be called on the first render

    return (
        <div className="bg-dark">
            <VehicleContext.Provider value={{ allVehicles, setAllVehicles }}>
                <Router>
                    <CustomNavbar />
                     <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route
                            path="/details/:vehicleName"
                            element={<Details />}
                        />
                    </Routes>
                </Router>

                <Footer />
            </VehicleContext.Provider>
        </div>
    );
}

export default App;

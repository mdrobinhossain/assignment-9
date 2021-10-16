import React from 'react';
import {Link} from "react-router-dom";
import './HomeImg.css';

const HomeImg = ({perVehicle, vehicle, setVehicle}) => {
    const handleClick=() =>{
        const newVehicle = {...vehicle};
        newVehicle.img = perVehicle.img;
        newVehicle.rent = perVehicle.rent;
        setVehicle(newVehicle);
        console.log(vehicle);
    }
    return (
        <Link to="/search" onClick={handleClick}  className="homeImg">
            <img src={perVehicle.img} alt="bike" />
            <p className="name">{perVehicle.name}</p>
        </Link>
    );
};

export default HomeImg;
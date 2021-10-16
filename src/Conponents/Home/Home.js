import React from 'react';
import './Home.css';
import Vehicle from '../Vechicle/Vechicle';
import HomeImg from '../HomeImg/HomeImg';


const Home = ({vehicle, setVehicle}) => {
    return (
        <div className="home">
            <div className="homeContainer">
                {Vehicle.map(perVehicle=> <HomeImg perVehicle={perVehicle} vehicle={vehicle} setVehicle={setVehicle} key={perVehicle.name} />)}
            </div>
        </div>
    );
};

export default Home;
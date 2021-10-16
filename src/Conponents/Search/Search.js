import React from 'react';
import './Search.css';
import { Link } from "react-router-dom";
import map from '../../images/Map.png';

const Search = ({setValue,value}) => {
    const handleBlur = (e) => {
        if(e.target.name === "pickFrom"){
            const newValue = {...value};
            newValue.pickFrom = e.target.value;
            setValue(newValue);
        }
        if(e.target.name === "pickTo"){
            const newValue = {...value};
            newValue.pickTo = e.target.value;
            setValue(newValue);
        }
    }
    console.log(value);
    return (
        <div className="search">
            <div className="hero">
                <hr />
                <div className="mapContainer">
                    <div className="searchBar">
                        <form action="">
                            <p>Pick from</p>
                            <input onBlur={handleBlur} type="text" name="pickFrom" id="pickFrom" />
                            <p>Pick to</p>
                            <input onBlur={handleBlur} type="text" name="pickTo" id="pickTo" />
                            <Link to ="/searchResult"><input className="searchBtn" type="submit" value="Search" /></Link>
                        </form>
                    </div>
                    <div className="map">
                        <img src={map} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
import React from 'react';
import './SearchResult.css';
import Group from "../../images/peopleicon.png";
import map from '../../images/Map.png';

const Search = ({value, vehicle}) => {
    return (
        <div className="search">
            <div className="hero">
                <hr />
                <div className="mapContainer">
                    <div className="resultContainer">
                        <div className="resultLineContainer">
                            <div className="resultLine">
                                <div className="circleContainer">
                                    <div className="circle"></div>
                                    <span> {value.pickFrom}</span>
                                </div>
                                <div className="straightLine"></div>
                                <div className="circleContainer">
                                    <div className="circle"></div>
                                    <span> {value.pickTo}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardItemContainer flexItem">
                                <div className="left">
                                    <img src={vehicle.img} alt="car" />
                                    <div className="person">
                                        <p>car</p>
                                        <img src={Group} alt="person" />
                                        <p>4</p>
                                    </div>
                                </div>
                                <div className="right">${vehicle.rent}</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardItemContainer flexItem">
                                <div className="left">
                                    <img src={vehicle.img} alt="car" />
                                    <div className="person">
                                        <p>car</p>
                                        <img src={Group} alt="person" />
                                        <p>4</p>
                                    </div>
                                </div>
                                <div className="right">${vehicle.rent}</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardItemContainer flexItem">
                                <div className="left">
                                    <img src={vehicle.img} alt="car" />
                                    <div className="person">
                                        <p>car</p>
                                        <img src={Group} alt="person" />
                                        <p>4</p>
                                    </div>
                                </div>
                                <div className="right">${vehicle.rent}</div>
                            </div>
                        </div>

                    </div>
                    <div className="map">
                        <img src={map} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
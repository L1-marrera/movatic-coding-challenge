import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai'
import './StationInformation.css';

function StationInformation({ selectedRow }) {
    const history = useNavigate();
    const { id } = useParams();
    const [station_information, setStation_information] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const url = `http://localhost:5000/station_information/${id}`
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // console.log(data[0])
                setStation_information(data)
            })
            .catch(error => {
                error = JSON.stringify(error)
                setError(error.message)
            });
    }, [id]);

    const previousPage = () => {
        history('/');
    };

    // station_information && console.log(station_information[0]);

    return (
        <div className="StationInformation-container">
            <h2 className="StationInformation-header">Coding Challenge</h2>
            {error && <p>Error: {error}</p>}
            <div className="StationInformation-menu">
                <button onClick={previousPage}> <AiOutlineLeft /> Back</button>
                <h3 className="StationInformation-header--id">Station ID: {id}</h3>
            </div>
            <div className="StationInformation-bodyContainer">
                <p>Name:</p>
                {station_information && (
                    <p>{station_information[0].name}</p>
                )}
            </div>
            <div className="StationInformation-bodyContainer">
                <p>Address:</p>
                {station_information && (
                    <p>{station_information[0].address}</p>
                )}
            </div>
            <div className="StationInformation-bodyContainer">
                <p>Region:</p>
                {station_information && (
                    <p>{station_information[0].region_id}</p>
                )}
            </div>
            <div className="StationInformation-bodyContainer">
                <p>Station Type:</p>
                {station_information && (
                    <p>{station_information[0]._bcycle_station_type}</p>
                )}
            </div>
            <div className="StationInformation-bodyContainer">
                <p>Longitude:</p>
                {station_information && (
                    <p>{station_information[0].lon}</p>
                )}
            </div>
            <div className="StationInformation-bodyContainer">
                <p>Latitude:</p>
                {station_information && (
                    <p>{station_information[0].lat}</p>
                )}
            </div>
        </div>
    );
}

export { StationInformation };
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function StationInformation({ selectedRow }) {
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
                console.log(data[0])
                setStation_information(data)
            })
            .catch(error => {
                error = JSON.stringify(error)
                setError(error.message)
            });
    }, [id]);

    // station_information && console.log(station_information[0]);

    return (
        <div >
            <h2 >Coding Challenge</h2>
            {error && <p>Error: {error}</p>}
            <div >
                <h3>Station ID: {id}</h3>
            </div>
            <div >
                <p>Name:</p>
                {station_information && (
                    <p>{station_information[0].name}</p>
                )}
            </div>
            <div >
                <p>Address:</p>
                {station_information && (
                    <p>{station_information[0].address}</p>
                )}
            </div>
            <div >
                <p>Region:</p>
                {station_information && (
                    <p>{station_information[0].region_id}</p>
                )}
            </div>
            <div >
                <p>Station Type:</p>
                {station_information && (
                    <p>{station_information[0]._bcycle_station_type}</p>
                )}
            </div>
            <div >
                <p>Longitude:</p>
                {station_information && (
                    <p>{station_information[0].lon}</p>
                )}
            </div>
            <div >
                <p>Latitude:</p>
                {station_information && (
                    <p>{station_information[0].lat}</p>
                )}
            </div>
        </div>
    );
}

export { StationInformation };
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StationTable } from '../StationTable';
import { StatusTable } from '../StatusTable';
import { StationInformation } from "../StationInformation";
import './Home.css'

function Home() {

    // Creando estados
    const [gbfs, setGbfs] = useState('');
    const [station_status, setStation_status] = useState('');
    const [error, setError] = useState('');
    const [selectedRow, setSelectedRow] = useState(null);
    const navigateTo = useNavigate();

    // Solicitar datos al backend
    useEffect(() => {
        fetch('http://localhost:5000/gbfs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // console.log(response);
                return response.json();
            })
            .then(data => {
                // console.log(data, data.data)
                // const gbfs = JSON.stringify(data)
                setGbfs(data)
            })
            .catch(error => {
                error = JSON.stringify(error)
                setError(error.message)
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/station_status')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // console.log(response);
                return response.json();
            })
            .then(data => {
                // console.log(data, data.data)
                // const gbfs = JSON.stringify(data)
                setStation_status(data)
            })
            .catch(error => {
                error = JSON.stringify(error)
                setError(error.message)
            });
    }, []);

    function convertEpochToDate(epoch) {
        if (!epoch) {
            return ''
        }
        const time = new Date(epoch * 1000);
        // console.log(time);
        if (isNaN(time.valueOf())) {
            return '';
        }
        return time.toLocaleString("en-GB");
    }

    const handleRowClick = (row) => {
        setSelectedRow(row);
        // console.log(row);    
        navigateTo(`/station/${row.station_id}`);
    };

    return (
        <div className='Home-container'>
            {gbfs.length === 0 ?
                <div className='Home-loading'>Waiting for data</div> :
                <div>
                    <h2 className="Home-header">Coding Challenge</h2>
                    {error && <p>{error}</p>}
                    <h3>The information presented here was taken from this links:</h3>
                    <StationTable
                        stationJson={gbfs.data.en.feeds}
                    />
                </div>
            }

            {station_status.length === 0 ?
                <div className='Home-loading--information'>...</div> :
                <div>
                    {error && <p>{error}</p>}
                    <h3>It was last Updated at: {convertEpochToDate(station_status.last_updated)}</h3>

                    {selectedRow ? (
                        <StationInformation selectedRow={selectedRow} />
                    ) : (
                        <StatusTable statusJson={station_status.data.stations} onRowClick={handleRowClick} />
                    )}
                </div>
            }
        </ div>
    );
}

export { Home };

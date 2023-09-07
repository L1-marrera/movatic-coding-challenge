// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from 'react';
import { StationTable } from './StationTable';

function App() {

  // Creando estados
  const [gbfs, setGbfs] = useState('');
  const [error, setError] = useState('');

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

  return (
    <>
      {gbfs.length === 0 ?
        <div>Waiting for data</div> :
        <div>
          {error && <p>{error}</p>}
          <h3>Last Updated: {convertEpochToDate(gbfs.last_updated)}</h3>
          <StationTable
            stationJson={gbfs.data.en.feeds}
          />
        </div>
      }
    </>
  );
}

export default App;

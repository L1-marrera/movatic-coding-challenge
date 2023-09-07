
function StatusTable({ statusJson, onRowClick }) {

    return (
        <div className='StatusTable-container'>
            {statusJson &&
                <table className='table-container'>
                    <thead className='table-header'>
                        <tr>
                            <th>ID</th>
                            <th>Docks</th>
                            <th>Installed</th>
                            <th>Renting</th>
                            <th>Bikes Available</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {statusJson.map(item => (
                            <tr key={item.station_id} onClick={() => onRowClick(item)}>
                                <td>{item.station_id}</td>
                                <td>{item.num_docks_available}</td>
                                <td>{item.is_installed}</td>
                                <td>{item.is_renting}</td>
                                <td>{item.num_bikes_available}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </ div>
    );
}

export { StatusTable };
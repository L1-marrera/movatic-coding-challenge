import React from "react";

function StationTable({ stationJson }) {
    const tableData = stationJson;

    // console.log(tableData);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item) => (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.url}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export { StationTable };
import React from "react";

function StationTable({ stationJson }) {
    const tableData = stationJson;

    // console.log(tableData);

    return (
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>URL</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {tableData.map((item) => (
        //             <tr key={item.name}>
        //                 <td>{item.name}</td>
        //                 <td>{item.url}</td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>
        <ul>
            {tableData.map((item) => (
                <li key={item.name}>
                    <strong> {item.name} </strong>: {item.url}
                </li>
            ))}
        </ul>
    );
}

export { StationTable };
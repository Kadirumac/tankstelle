import React from 'react';
import data from '../../data.json';
import { Table } from "react-bootstrap";
console.log(data);

const Liste = () => {
    return (
        <div>
             <Table  hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Strasse</th>
                    <th>PLZ</th>
                    <th>Ort</th>
                    <th>Latidute</th>
                    <th>Longitude</th>
                  </tr>
                </thead>
            {data.map((item,index)=>{
                return      <tbody>
                  <tr>
                    <td>{ index +1 } </td>
                    <td> { item.Strasse } </td>
                    <td>{ item.PLZ} </td>
                    <td>{item.Ort} </td>
                    <td> {item.Latitude}  </td>
                    <td> {item.Longitude}  </td>
                  </tr>
              
                </tbody>
         
            })}
                 </Table>
        </div>
    );
};

export default Liste;
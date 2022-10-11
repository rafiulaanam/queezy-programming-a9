import React from 'react';
import Table from 'react-bootstrap/Table';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    return (
        <div className='sta'>
           <h1 className='text-center'><u>Statistics of Winner</u></h1>

           <h5>First Three Winners</h5>
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

           <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#888" />
    <CartesianGrid stroke="#000000" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>

        </div>
    );
};

export default Statistics;
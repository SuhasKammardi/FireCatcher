import React, { useState, useEffect } from 'react';
import './table.css'

const QueryTable = () => {
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    // Fetch data from Express API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/QueryTable');
        const data = await response.json();
        setBicycles(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  return (
    <div style={{background: 'white', marginTop: '25px', minHeight: '300px'}}>
      <hr style={{borderTop: '5px solid #170a83', opacity: '1'}}/>
      <h2>Product Queries</h2>
       <hr style={{borderTop: '5px solid #170a83', opacity: '1'}}/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Location</th>
            <th>Message</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {bicycles.map((bicycle) => (
            <tr key={bicycle._id}>
              <td>{bicycle.name}</td>
              <td><a href={`mailto:${bicycle.email}`}>{bicycle.email}</a></td>
              <td>{bicycle.mobile}</td>
              <td>{bicycle.location}</td>
              <td>{bicycle.message}</td>
              <td>{bicycle.product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryTable;

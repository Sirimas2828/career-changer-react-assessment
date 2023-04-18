import React from 'react'
import {useState} from 'react'
import { useEffect } from "react"
import Layout from './Layout'
import './style.css'
import Navbar from "./Navbar"
import User from "./User"
import Admin from "./Admin"




const Home = () => {

  return (
    <div>
      <Layout />
      <Content />
      <Sector />
      <Sector2 />
    </div>
  )
}

function Content() {
  
  return (
    <div class="content">
        <h1>Generation Thailand</h1>
        <h1>React - Assessment</h1>
    </div>
  )
}



const Sector = () => {
  const mockEmployees = [
    { name: 'mock', lastname: 'mocklastname', position: 'Manager' },
    { name: 'employee 1', lastname: 'lord', position: 'Engineer' },
    { name: 'employee 2', lastname: 'Johnson', position: 'Designer' }
  ];

  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div>
      <button onClick={toggleTable}>User Home Sector</button>
      {showTable && (
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {mockEmployees.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const Sector2 = () => {
  const [mockEmployees, setMockEmployees] = useState([
    { name: 'mock', lastname: 'mocklastname', position: 'Manager' },
    { name: 'employee 1', lastname: 'lord', position: 'Engineer' },
    { name: 'employee 2', lastname: 'Johnson', position: 'Designer' }
  ]);

  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');

  const toggleAdminPanel = () => {
    setShowAdminPanel(!showAdminPanel);
  };

  const deleteUser = (index) => {
    const updatedEmployees = [...mockEmployees];
    updatedEmployees.splice(index, 1);
    setMockEmployees(updatedEmployees);
  };

  const addUser = () => {
    const updatedEmployees = [...mockEmployees];
    updatedEmployees.push({ name, lastname: lastName, position });
    setMockEmployees(updatedEmployees);
    setShowCreateUser(false);
  };

  return (
    <div>
      <button onClick={toggleAdminPanel}>Admin Home Sector</button>
      {showAdminPanel && (
        <div className="Admin">
          <h1>Create User Here</h1>
          <div>
            <input type="text" placeholder="Name" style={{ margin: '4px' }} onChange={(event) => setName(event.target.value)} />
            <input type="text" placeholder="Last Name" style={{ margin: '4px' }} onChange={(event) => setLastName(event.target.value)} />
            <input type="text" placeholder="Position" style={{ margin: '4px' }} onChange={(event) => setPosition(event.target.value)} />
            <button style={{ margin: '4px' }} onClick={addUser}>Save</button>
          </div>
        </div>
      )}
      {showAdminPanel && (
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mockEmployees.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
                <td><button onClick={() => deleteUser(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};




export default Home

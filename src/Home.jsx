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
      {/* <Admin /> */}
    </div>
  )
}

function Content() {
  
  return (
    <div class="content">
        <h1>Generation Thailand</h1>
        <h1>React - Assessment</h1>
      <button class ='button'>Admin Home Sector</button>
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
        <table>
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



// const Admin = () => {
//   let fillInfo = [
//     <h1>Creat User Here</h1>
//         <div>
//           <input type="text" placeholder="Name" style={{margin: '4px'}} />
//           <input type="text" placeholder="Last Name" style={{margin: '4px'}} />
//           <input type="text" placeholder="Position" style={{margin: '4px'}} />
//           <button style={{margin: '4px'}}>Save</button>
//         </div>
//   ];
    
  
        






// const Employees = () => {
//   const [mockEmployees, setEmployee] = useState()
 
//     setEmployee(mockEmployees)
// }





export default Home

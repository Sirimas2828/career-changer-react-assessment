import React from "react"
import { useState, useEffect } from "react"
import Admin from "./Admin"
import User from "./User"
import Layout from './Layout';
import './style.css'


const Home = () => {

  const mockEmployees = [
    {
      id: 0,
      name: "mock",
      lastname: 'Sweet',
      position: "Manager"
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer"
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer"
    },
  ]


  const [sector, setSector] = useState('')
  const [employees, setEmployees] = useState(mockEmployees)


  const defineSector = (sectorPrm) => {
    setSector(sectorPrm)
  }

  function ContentNormal () {
    if (sector === 'admin') {
      return (
        <Admin employees={employees} setEmployees={setEmployees} />
      )
    }
    else if (sector === 'user') {
      return (
        <User employees={employees} setEmployees={setEmployees} />
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }


  return (
    <Layout>
      <div>
        <div id="home-section1-normal">
          <h1>Generation Thailand</h1>
          { sector === '' && <h1>React - Assessment</h1>}
          { sector === 'user' && <h1>Home - User Sector</h1>}
          { sector === 'admin' && <h1>Home - Admin Sector</h1>}
          <div className="home-section1-normal-btn">
            <button onClick={() => defineSector('user')}>User Home Sector</button>
            <button onClick={() => defineSector('admin')}>Admin Home Sector</button>
          </div>
        </div>
        <ContentNormal />
      </div>
    </Layout>
  )

}



export default Home
import React from "react"
import { useState, useEffect } from "react"
import './style.css'


const Admin = (props) => {
    
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [position, setPosition] = useState();

    const addUser = (userPrm) => {
        userPrm.id = props.employees.length
        
        props.setEmployees([...props.employees, userPrm])
        console.log(userPrm)
    }

    const deleteUser = (i) => {
        const employeesEm = [...props.employees]
        employeesEm.splice(i, 1)
        props.setEmployees(employeesEm)
    }

    console.log(props.employees)

    return (
        <div className="admin-section2">
            <h2>Create User Here</h2>
            <div className="admin-section2-input">
                <input onChange={(event) => {setName(event.target.value)}} type="text" placeholder="Name" />
                <input onChange={(event) => {setLastname(event.target.value)}} type="text" placeholder="Last Name" />
                <input onChange={(event) => {setPosition(event.target.value)}} type="text" placeholder="Position" />
                <button onClick={() => addUser({
                    id: {},
                    name: name,
                    lastname: lastname,
                    position: position})}>Save</button>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {props.employees.map((item, i) => {
                    return (
                        <tr key={i+1}>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td>{item.position}</td>
                            <td><button onClick={() => deleteUser(i)} id="admin-delete-btn">Delete</button></td>
                        </tr>
                )
                })}
            </table>
        </div>
    )
}

export default Admin
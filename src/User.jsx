import React from 'react'
import Home from './Home'

let mockEmployees = [
    {
      id: 0,
      name: "mock",
      lastname: 'mocklastname',
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



const User = () => {
    return (
        <table>
        <tr>
            <th>name</th>
            <th>Last name</th>
            <th>Position</th>
        </tr>
        {mockEmployees.map((item) => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.position}</td>
                </tr>
            )
        })}
    </table>
)
}
    


export default User;

import React from 'react'
import './style.css'


const User = (prop) => {

    return (
        <table>
        <tr className="user-sector">
            <th>Name</th>
            <th>Last name</th>
            <th>Position</th>
        </tr>
        {prop.employees.map((item, i) => {
            return (
                <tr className="user-sector">
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

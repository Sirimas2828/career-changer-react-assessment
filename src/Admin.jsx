import React from 'react'

function Admin() {
    return (
      <div className="Admin"> 
        <h1>Create User Here</h1>
        <div>
        <input type="text" placeholder="Name" style={{margin: '4px'}} onChange={(event) => setName(even.target.value)} />
          <input type="text" placeholder="Last Name" style={{margin: '4px'}} onChange={(event) => setName(even.target.value)} />
          <input type="text" placeholder="Position" style={{margin: '4px'}} onChange={(event) => setName(even.target.value)} />
          <button style={{margin: '4px'}} onClick={addUser}>Save</button>
        </div>
      
        <table>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
        
          {users.map((item) => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                        <td><button onClick={() => deleteUser(index)}>Delete</button></td>
                    </tr>
                    )
            })}
         
        </table>
      </div>
    );
  }
  




export default Admin;
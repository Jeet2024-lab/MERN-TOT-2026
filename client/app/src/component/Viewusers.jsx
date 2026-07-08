import React, { useState, useEffect } from "react";
import axios from "axios";

function Viewusers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
const res= await axios.get("http://localhost:3002/users");
setUsers(res.data.userdata);
console.log(res.data.userdata);

    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <div>
      <h1 className="text-center text-2xl bold">List of Users</h1>
      <table border="1px" className=" table-auto bg-blue-200 border overflow-x-auto border-seperate text-center w-full rounded-lg border">
        <thead className="bold text-2xl">
          <tr>
            <td>SNo.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
            {
                users.length>0?(
                    users.map((u,index)=>(
                       <tr>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>
                            <button>Edit</button>
                            <button>
                                Delete
                            </button>
                        </td>
                       </tr>
                        
                    ))):(
                        <tr> No User Found</tr>
                    )
                
            }
        </tbody>
      </table>
    </div>
  );
}

export default Viewusers;

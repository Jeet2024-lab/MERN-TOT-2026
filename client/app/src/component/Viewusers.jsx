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
      <h1 className="text-center text-3xl bold">List of Users</h1>
      <table border="1px" className=" hover:bg-white-300 table-auto bg-blue-200 border overflow-x-auto border-seperate text-center w-full rounded-lg border">
        <thead className="bold text-2xl">
          <tr>
            <th className="p-3 border">SNo.</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody>
            {
                users.length>0?(
                    users.map((u,index)=>(
                       <tr>
                        <td className="p-3 border">{u.id}</td>
                        <td className="p-3 border">{u.name}</td>
                        <td className="p-3 border">{u.email}</td>
                        <td className="p-3 border">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2  my-1 rounded transition duration-300">Edit</button>
        &nbsp;
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300 my-1">
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

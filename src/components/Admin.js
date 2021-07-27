import React, { useState, useEffect, useContext } from "react";
import { userContext } from "./../userContext";

const Admin = ({ userID, userName, userRole }) => {
  const isLogged = useContext(userContext)
  console.log(isLogged)
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await fetch(
        "https://node-workshop-tpk.herokuapp.com/api/v1/users",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const data = await result.json();
      setUsers(data);
      // console.log(users);
      // console.log(userName);
      // console.log(userRole);
      // console.log(userID);
    };
    getData();
  }, []);

  return (
    
        
       
      <div>
        <h1>Je S'appelle Gestionnaire</h1>
        <h6>
          Logged as {userName} ({userRole}) id : {userID}
        </h6>
        <p>Admin List</p>
        <ul>
          {users.map((u) =>
            u.role === "gestionnaire" ? (
              <li key={u.id}>
                {u.firstName} {u.lastName}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
  
  );
};

export default Admin;

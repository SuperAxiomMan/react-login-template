import React, { useState, useEffect } from "react";

const Admin = () => {
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
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Je S'appelle Gestionnaire</h1>
      <ul>
        {users.map((u) =>
          u.role === "gestionnaire" ? (
            <li key={u.id}>{u.firstName} {u.lastName}</li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default Admin;

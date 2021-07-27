import React, { useState, useEffect } from "react";

const Formateur = () => {
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
      <h1>Je S'appelle Formateur</h1>
      <ul>
        {users.map((u) =>
          u.role === "formateur" ? (
            <li key={u.id}>{u.firstName} {u.lastName}</li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default Formateur;

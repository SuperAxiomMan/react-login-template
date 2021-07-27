import React, { useState } from "react";
import "./App.css";
import Formateur from "./components/Formateur";
import Student from "./components/Student";
import Admin from "./components/Admin";

import Nav from "./components/Nav";

import {userContext} from './userContext';


const App = () => {
  const [userRole, setUserRole] = useState("");
  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  const [userLog, setUserLog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputMail = e.target.email.value;
    const inputPass = e.target.password.value;
    try {
      let fetchUser = await fetch(
        "https://node-workshop-tpk.herokuapp.com/api/v1/login",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            mail: inputMail,
            password: inputPass,
          }),
        }
      );
      const res = await fetchUser.json();
      setUserRole(res.role);
      setUserID(res.id);
      setUserName(res.lastName);
      setUserLog(true)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />
      <userContext.Provider value={userLog}>
      <main>
        {userRole === "gestionnaire" ? (
          <Admin userID={userID} userName={userName} userRole={userRole} />
        ) : userRole === "formateur" ? (
          <Formateur userID={userID} userName={userName} userRole={userRole} />
        ) : userRole === "stagiaire" ? (
          <Student userID={userID} userName={userName} userRole={userRole} />
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">email</label>
              <input id="email" name="email" type="text" />
              <label htmlFor="password">password</label>
              <input id="password" name="password" type="password" />
              <input type="submit" value="Login" />
            </form>
          </div>
        )}
      </main>
      </userContext.Provider>
    </div>
  );
};

export default App;

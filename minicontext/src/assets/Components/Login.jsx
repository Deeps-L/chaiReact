import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
      e.preventDefault()
      setUser( {username, password})
    };
    return (
      <div>
        <h2>Login Page</h2>
        <input
          type="text"
          name="username"
          id=""
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
  

export default Login
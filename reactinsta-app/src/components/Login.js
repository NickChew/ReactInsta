
import { useState } from "react";
import { login } from "../utils/utilities";

const Login = ({setter}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [loggedIn, setLoggedIn] = useState();

  const submitHandler = async (event) =>{
    event.preventDefault();
    console.log("executing login request")
    await login(username, email, password, setter);
  }

  return (
    <form onSubmit={submitHandler}>
      <input onChange={(event) => setUsername(event.target.value)} />
      <input onChange={(event) => setEmail(event.target.value)} />
      <input onChange={(event) => setPassword(event.target.value)} />
      <button onClick={submitHandler}>Log In</button>
    </form>
  )
}

export default Login;

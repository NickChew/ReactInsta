
import { useState } from "react";
import { listUsers } from "../utils/utilities";

const ListUsers = ({setter}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 
  const submitHandler = async (event) =>{
    event.preventDefault();
    console.log("executing User List request")
    await listUsers(username, setter);
  }

  return (
    <form onSubmit={submitHandler}>
       {/* code to list users goes here */}
      <button onClick={submitHandler}> List Users </button>
   
    </form>
  )
}

export default ListUsers;
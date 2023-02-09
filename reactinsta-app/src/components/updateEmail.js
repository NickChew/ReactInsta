
import { useState } from "react";
import { updateEmail } from "../utils/utilities";

const UpdateEmail = ({setter}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newEmail, setnewEmail] =useState();

  const submitHandler = async (event) =>{
    event.preventDefault();
    console.log("executing Update Email request")
    await updateEmail(username, newEmail, password, setter);
  }

  return (
    <form onSubmit={submitHandler}>
      <input onChange={(event) => setUsername(event.target.value)} />
      <input onChange={(event) => setEmail(event.target.value)} />
      <input onChange={(event) => setPassword(event.target.value)} />    
      <button onClick={submitHandler}>Update Email</button>
    </form>
  )
}

export default UpdateEmail;

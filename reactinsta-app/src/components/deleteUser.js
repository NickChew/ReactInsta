
import { useState } from "react";
import { deleteUser } from "../utils/utilities";

const DeleteUser = ({setter}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [deleteUser, setDeleteUser] = useState();


  const submitHandler = async (event) =>{
    event.preventDefault();
    console.log("executing Delete User request")
    await deleteUser(username, email, password, setter);
  }

  return (
    <form onSubmit={submitHandler}>
      <input onChange = {(event) => deleteUser(event.target.value)} /> 
     {/* enter code to check user is in db then delete */}
     {/* {(user === "username") ? deleteUser.username*/}
     <button onClick={submitHandler}> Delete User </button>
    </form>
  )
}

export default DeleteUser;
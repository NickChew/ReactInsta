
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
      {/* {user && <deleteBox user = {deleteUser}></deleteBox>}
      {(User === "deleteUser") ? <deleteBox name = "User Deleted" /> : <deleteBox name = "INCORRECT USER"/>}
      <input onChange={(event) => deleteUser(event.target.value)} />
        {myArray.map((item,index) => {return (
        <div>
          <deleteBox deleteUser={item.deleteUser} />
        </div>
      )})}; */}
     <button onClick={submitHandler}> Delete User </button>
    </form>
  )
}

export default DeleteUser;
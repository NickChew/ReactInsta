
import { useState } from "react";
import { updateEmail } from "../utils/utilities";

const UpdateEmail = ({setter}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const submitHandler = async (event) =>{
    event.preventDefault();
    console.log("executing Update Email request")
    await updateEmail(username, email, password, setter);
  }

  return (
    <form onSubmit={submitHandler}>
      {/* Code to change email goes here */}
      <input onChange={(event) => setEmail(event.target.value)} />
      {email && <updateBox email = {updateEmail}></updateBox>}
      {(email === "updateEmail") ? <updateBox name="Email Updated" /> : <updateBox name = "INCORRECT EMAIL"/>}
      {myArray.map((item,index) => {return (
        <div>
          <updateBox updateEmail={item.updateEmail} />
        </div>
      )})};
      <button onClick={submitHandler}>Update Email</button>
    </form>
  )
}

export default UpdateEmail;
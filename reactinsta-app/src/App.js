
import './App.css';
import Box from "./components/box";
import { useState, useEffect } from 'react';
import Login from './components/Login';
import { readCookie } from './common/index';
import { authCheck } from './utils/utilities'
import AddUser from './components/addUser';
import ListUsers from './components/listUsers';
import DeleteUser from './components/deleteUser';
import UpdateEmail from './components/updateEmail';

//in a react app JS goes here, use if statements here not in JSX section

function App() {
  const [user, setUser] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cookie, setCookie] = useState();

  async function loginWithToken(cookie){
    const user = await authCheck(cookie);
    console.log("login with token", user);
    setUser(user);
    setCookie(cookie);
  }

  useEffect(() => {
    fetchImages();
    let cookie = readCookie('jwt_token');
    if  (cookie !== false) {
      loginWithToken(cookie);
    }
  },[]);
  
  // const myArray = [{name:"Harry"},{ name:"George"}, {name:"Hermione"},{name:"Mafalda"},{name:"Percy"}];

  const fetchImages = async () => {
    const response = await fetch ("https://picsum.photos/v2/list");
    console.log(response)
    const data = await response.json();
    console.log(data);
    setPhotos(data);
    console.log(photos);
    };
    
  // for (let index = 0; index < myArray.length; index++) {
  //   const element = myArray[index];
  //   console.log(element);
  // };  
  // THis can be re writen as a map function and the map function can be placed in the JSX below  myArray.map((item, index)=>{console.log(item.name)})

  const logout = () => {
    document.cookie = "jwt_token =; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    setUser("");
  }  

  return (        //JSX (html and JS) goes after here in the return
    <div className="App">
      <Login setter={setUser}> </Login>
      {{user} && <button onClick={logout}>Logout</button>}
      {{user} ? <h1>{user} logged in</h1> : <h1>logged out</h1>}
      <br></br>
      <AddUser setter={setUser}/>
      <ListUsers setter={setUser}/>
      <DeleteUser setter={setUser}/>
      <UpdateEmail setter={setUser}/>
      
      {user ? photos.map((item,index) => {
        return (
          <div>
            <img src={item.download_url} width="150px" />
            <h2>{item.author}</h2>
          </div>
        )
        }) : <h1>Please Login</h1>
      }
      <br></br>

      
      {/* && is the equivalent of an IF statement */}
      {/* ? and : are the equivalent of an IF ELSE statement */}

      {/* <input onChange = {(event) => setUser(event.target.value)} /> 
      {user && <Box name = {user}></Box>} */}
      {/* If user exists then display the username in the Box component */}

      {/* {(user === "Harry") ? <Box name="Harry logged in" /> : <Box name = "Harry not logged in"/>} */}
      {/* IF user equals (==) Harry THEN(?) display Harry logged in (: or ELSE) Harry not logged in */}
      
      {/* {myArray.map((item,index) => {return (
        <div>
          <Box name={item.name} />
        </div>
      )})}; */}
      {/* <img src='https://picsum.photos/200' alt="stock photo" /> */}


   </div>
  );
}

export default App;

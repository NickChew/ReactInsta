
import './App.css';
import Box from "./components/box";
import { useState, useEffect } from 'react';

//in a react app JS goes here, use if statements here not in JSX section

function App() {
  const [user, setUser] = useState("Harry");
  return (        //JSX (html and JS) goes after here in the return
    <div className="App">
      {/* && is the equivalent of an IF statement */}
      {/* ? and : are the equivalent of an IF ELSE statement */}
      <input onChange = {(event) => setUser(event.target.value)} />
      {user && <Box name = {user}></Box>}
      {/* If user exists then display the username inthe Box component */}
      {(user == "Harry") ? <Box name="Harry logged in" /> : <Box name = "Harry not logged in"/>}
      {/* IF user equals (==) Harry THEN(?) display Harry logged in (: or ELSE) Harry not logged in */}
      <Box name ="George"></Box>
      <Box name ="Hermione"></Box>
      <Box name ="Mafalda"></Box>
      <Box name ="Percy"></Box>

    </div>
  );
}

export default App;


import { storeCookie } from "../common";

export const login = async (username,email,password,setter,cookie) => {
  try {
    const response = await fetch("http://localhost:5001/login",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        }
      )
    })
    const data = await response.json();
    setter(data.user);
    // console.log(data)
    storeCookie("jwt_token",data.token,7);
  } catch (error) {
    console.log(error)    
  }
}

export const authCheck  = async (jwt_token) => {
  try {
    const response = await fetch ("http://localhost:5001/authCheck",{
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${jwt_token}`
      }
    }
    )
  const data = await response.json();
  console.log("authCheck:",data);
  return data.user;
  } catch (error) {
    console.log(error)
  }
}

export const addUser = async (username,email,password,setter,cookie) => {
  try {
    const response = await fetch("http://localhost:5001/addUser",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        }
      )
    })
    const data = await response.json();
    setter(data.user);
    // console.log(data)
    storeCookie("jwt_token",data.token,7);
  } catch (error) {
    console.log(error)    
  }
}

export const deleteUser = async (username,email,password,setter,cookie) => {
  try {
    const response = await fetch("http://localhost:5001/deleteUser",{
        method: "DELETE",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        }
      )
    })
    const data = await response.json();
    setter(data.user);
    // console.log(data)
    storeCookie("jwt_token",data.token,7);
  } catch (error) {
    console.log(error)    
  }
}

export const listUsers = async (username,email,password,setter,cookie) => {
  try {
    const response = await fetch("http://localhost:5001/listUsers",{
        method: "GET",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        }
      )
    })
    const data = await response.json();
    setter(data.user);
    console.log(data)
    storeCookie("jwt_token",data.token,7);
  } catch (error) {
    console.log(error)    
  }
}

export const updateEmail = async (username,email,password,setter,cookie) => {
  try {
    const response = await fetch("http://localhost:5001/updateEmail",{
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        }
      )
    })
    const data = await response.json();
    setter(data.user);
    // console.log(data)
    storeCookie("jwt_token",data.token,7);
  } catch (error) {
    console.log(error)    
  }
}
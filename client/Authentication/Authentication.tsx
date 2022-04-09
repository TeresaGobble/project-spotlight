import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// need to ask charles for firebase API key
import { auth } from "./firebase-config";

const Authentication = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  // // onAuthStateChanged(auth, (currentUser) => {
  // //   setUser(currentUser);
  // // });

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );
  //     console.log(user);
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };

  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );
  //     console.log(user);
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };

  // const logout = async () => {
  //   await signOut(auth);
  // };

  return (
    <div>
      This is the Authentication component.
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(e) => {
            setRegisterEmail(e.target.value);
            console.log('registerEmail: ', registerEmail);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(e) => {
            setRegisterPassword(e.target.value);
            console.log('registerPassword: ', registerPassword);
          }}
        />

        {/* <button onClick={register}> Create User</button> */}
        <button onClick={() => console.log('Submitted Create User: ', registerEmail, registerPassword)}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(e) => {
            setLoginEmail(e.target.value);
            console.log('loginEmail: ', loginEmail);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(e) => {
            setLoginPassword(e.target.value);
            console.log('loginPasword: ', loginPassword);
          }}
        />

        {/* <button onClick={login}> Login</button> */}
        <button onClick={() => console.log('Attempted Credentials: ', loginEmail, loginPassword)}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {/* {user} */}
      {/* {user?.email} */}

      {/* <button onClick={logout}> Sign Out </button> */}
      <button> Sign Out</button>
    </div>
  )
}

export default Authentication;
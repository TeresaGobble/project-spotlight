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

  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");


  onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      // console.log('user being registered: ', user);
      let newEmail: any = user.user.email;
      setUserEmail(newEmail);
      window.alert("New user created, welcome to Project Spotlight!");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      // console.log('user being logged in: ', user);
      let existingAccountEmail: any = user.user.email;
      setUserEmail(existingAccountEmail);
      let welcomeMessage: string = "Welcome back " + existingAccountEmail;
      window.alert(welcomeMessage);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      signOut(auth);
      // console.log('user being logged out: ', user);
      window.alert("Successfully logged out");
      setUserEmail("");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="authentication">
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

        <button onClick={register}> Create User</button>
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
            type="password"
            onChange={(e) => {
              setLoginPassword(e.target.value);
              console.log('loginPasword: ', loginPassword);
            }}
          />

          <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: {userEmail}</h4>
      {/* why can't I use conditional rendering with TypeScript? */}
      {/* {user?.email} */}

      <button onClick={logout}> Sign Out </button>
    </div>
  )
}

export default Authentication;
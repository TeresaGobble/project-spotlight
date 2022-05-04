import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// need to ask charles for firebase API key
import { auth } from "./firebase-config";
import { Box, Button, Typography, Modal } from '@mui/material';

const Authentication = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      let newEmail: any = user.user.email;
      setUserEmail(newEmail);
      window.alert("Registration complete, welcome to Project Spotlight!");
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
      window.alert(error.message.slice(17, (error.message.length - 2)));
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

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #a9a9a9',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <div>
        <Button onClick={handleOpen}>New to our website? Register here!</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="register">
              <Typography id="modal-modal-title" variant="h6" component="h2"> Register User </Typography>
              <input
                placeholder="Email..."
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                  // console.log('registerEmail: ', registerEmail);
                }}
              />
              <input
                placeholder="Password..."
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                  // console.log('registerPassword: ', registerPassword);
                }}
              />

              <button onClick={register}> Register</button>
      <div className="login">
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(e) => {
            setLoginEmail(e.target.value);
            // console.log('loginEmail: ', loginEmail);
          }}
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
            // console.log('loginPasword: ', loginPassword);
          }}
        />

        <button onClick={login}> Login</button>
      </div>
            </div>
          </Box>
        </Modal>
      </div>


      <h4> User Logged In: {userEmail}</h4>
      {/* why can't I use conditional rendering with TypeScript? */}
      {/* {user?.email} */}

      <button onClick={logout}> Sign Out </button>
    </div>
  )
}

export default Authentication;
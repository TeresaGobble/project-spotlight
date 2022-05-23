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
      // hide registration/login modal
      document.getElementById("modalDiv").style.display = "none";
      document.getElementById("login").style.display = "block";
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
      // hide registration/login modal
      document.getElementById("modalDiv").style.display = "none";
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
      // un-hide registration/login modal
      document.getElementById("modalDiv").style.display = "block";
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
    <div className="authentication">
      <div id="modalDiv">
        <Button  onClick={handleOpen}>New to our website? Register here!</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="register">
              <Typography id="modal-modal-title" variant="h6" component="h2"> Register </Typography>
              <input
                placeholder="Email..."
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
              />
              <input
                placeholder="Password..."
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
              />

              <button onClick={register}> Register</button>
      <div className="login">
      <Typography id="modal-modal-title" variant="h6" component="h2"> Already a User? Login </Typography>
        <input
          placeholder="Email..."
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>
            </div>
          </Box>
        </Modal>
      </div>

      <div id="login" style={{
        position: "absolute",
        width: "129px",
        wordWrap: "break-word",
        height: "110px",
        padding: "3px"
        }}>

      <h4> User Logged In:</h4>
      {userEmail !== undefined && <div>{userEmail}</div>}
      <button onClick={logout}> Sign Out </button>
      </div>
    </div>
  )
}

export default Authentication;
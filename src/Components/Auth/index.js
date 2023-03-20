import React, { useContext } from "react";
import google from "../../../src/Images/google.png";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase config";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import "./auth.css";

function Auth({ type }) {
  const provider = new GoogleAuthProvider();
  const [userData, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const redirectUser = () => {
    // if usertype is candidate
    // if usertype is employer
    if (type === "candidate") {
      // if user exists in database
      if (
        // if user exists in database
        false // find a way to check if user exists in database
      ) {
        // check the user type in the database for this user
        // if in the database the user type is candidate
        // redirect to candidate profile
        if (
          // if in the database the user type is candidate
          true
        ) {
          navigate("/candidate/profile");
        }
        // else show error message this id is already registered as employer
        else {
          alert("this id is already registered as employer");
          return;
        }
      }
      // if user does not exist in database
      else {
        navigate("/candidate/onboarding");
      }
    } else {
      // if user exists in database
      if (
        // if user exists in database
        false
      ) {
        // check the user type in the database for this user
        // if in the database the user type is employer
        // redirect to employer profile
        if (
          // if in the database the user type is employer
          true
        ) {
          navigate("/employer/profile");
        }
        //else show error message this id is already registered as candidate
        else {
          alert("this id is already registered as candidate");
          return;
        }
      }
      // if user does not exist in database
      else {
        navigate("/employer/onboarding");
      }
    }
  };
  const signin = () => {
    // const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result;
        const { email, displayName, photoURL } = user;
        dispatch({
          type: "LOGIN",
          payload: {
            email,
            displayName,
            photoURL,
          },
        });
        redirectUser();
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
  return (
    <>
      <div className="auth-container">
        <div>
          <h1>Welcome {type}!!</h1>
          <h3>Please Sign IN</h3>

          <div>
            <button onClick={signin}>
              <img src={google} alt="btn" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;

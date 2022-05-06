import React from "react";
import "./SocialLogin.css";
import googleIcon from "../../img/logo/Google-logo.png";
import githubIcon from "../../img/logo/github-logo.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (loading1 || loading2) {
    return <Spinner />;
  }

  let errorMessage;
  if (error1 || error2) {
    errorMessage = error1?.message || error2?.message;
  }

  if (user1 || user2) {
    navigate(from, { replace: true });
  }

  return (
    <div className="social-login">
      <hr />
      <h5 className="text-center">Social Login</h5>
      {errorMessage && (
        <p className="text-danger text-center">{errorMessage}</p>
      )}
      <div className="d-flex flex-column jusify-content-center align-items-center">
        <div
          className="google-icon-signin mb-3"
          onClick={() => signInWithGoogle()}
        >
          <img src={googleIcon} alt="Google" /> Sign in with Google
        </div>
        <div className="github-icon-signin" onClick={() => signInWithGithub()}>
          <img src={githubIcon} alt="Github" /> Sign in with Github
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;

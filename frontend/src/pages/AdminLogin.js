import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSignUpTextClick = () => {
    navigate("/user-log-in");
  };

  const onLoginClick = async () => {
    try {
      const response = await axios.post("http://localhost:3005/api/v1/admin/login", { email, password });
  
      if (response.status === 200) {
        // Successful login, navigate to admin-apple
        navigate("/admin-apple");
      } else {
        // Show an error message when the response status is not 200
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      // Handle any network or server errors
      setError("An error occurred. Please try again.");
    }
  };
  
  return (
    <div className="admin-login">
      <img className="admin-login-child" alt="" src="/rectangle-1086@2x.png" />
      <div className="admin-login-item" />
      <div className="dont-have-an">Don’t have an account?</div>
      <div className="sign-up" onClick={onSignUpTextClick}>
        Sign up!
      </div>
      <div className="sign-up-details1">
        <div className="or-continue-with1">Or continue with</div>
        <img className="sign-up-details-child2" alt="" src="/vector-121.svg" />
        <img className="sign-up-details-child3" alt="" src="/vector-13.svg" />
        <div className="rectangle-parent2" onClick={() => window.open("www.google.com")}>
          <div className="frame-child101" />
          <div className="google1">Google</div>
          <img className="google-1-icon1" alt="" src="/google-11.svg" />
        </div>
        <div className="rectangle-parent3" onClick={() => window.open("www.facebook.com")}>
          <div className="frame-child102" />
          <img className="facebook-1-icon1" alt="" src="/facebook-1.svg" />
          <div className="facebook1">Facebook</div>
        </div>
        <div className="recover-password1">Recover Password</div>
        <div className="default-group">
          <div className="default1" />
          <div className="knob-201" />
          <div className="description1">Remember me</div>
        </div>
        <TextField
          className="sign-up-details-child4"
          color="primary"
          label="Email"
          sx={{ width: 552.400390625 }}
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <TextField
          className="sign-up-details-child5"
          color="primary"
          label="Password"
          sx={{ width: 552.400390625 }}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility" : "visibility_off"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        <Button
          className="button1"
          sx={{ width: 552.400390625 }}
          color="secondary"
          size="large"
          variant="contained"
          onClick={onLoginClick}
        >
          Log In
        </Button>
        {error && <div className="error-message">{error}</div>}
        <div className="login-into-your">Login into your account</div>
        <div className="welcome-admin">Welcome Admin</div>
      </div>
      <img className="admin-login-inner" alt="" src="/rectangle-1088@2x.png" />
    </div>
  );
}

export default AdminLogin;

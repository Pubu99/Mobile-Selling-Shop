import { useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AdminSignUp.css";
import axios from 'axios';





const AdminSignUp = () => {
  //const[email, setemail] = useState('')
  //const[password, setPassword] = useState('')
  const [formData, setFormData] = useState({
    email: "",
    password: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //setemail(formData.email);
  //setPassword(formData.password);
  
console.log("email" , formData.email);

    const handleAdminSignUp = async (e) => {
    
     
      try {
        const response = await axios.post('http://localhost:3005/api/v1/admin/register', {
          email:formData.email,
          password:formData.password
        });
        console.log(response)
    
        
        if (response.status === 201) {
          console.log(response)
          
          alert('Admin registration successful! Please log in.');
          
        } else {
          // Handle other status codes or scenarios if needed
        }
      } catch (error) {
        // Handle errors (e.g., show an error message)
        if (error.response) {
          
          alert(`Registration failed: ${error.response.data.message}`);
          console.log(error)
        } else {
          // Network error or other issues
          alert('Registration failed. Please try again later.');
        }
      }
    };
  



  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSignInTextClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    window.open("www.google.com");
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    window.open("www.facebook.com");
  }, []);


  return (
    <div className="admin-sign-up">
      <div className="admin-sign-up-child" />
      <div className="already-have-an">Already have an account?</div>
      <div className="sign-in" onClick={onSignInTextClick}>
        Sign In!
      </div>
      <div className="sign-up-details">
        <div className="or-continue-with">Or continue with</div>
        <img className="sign-up-details-child" alt="" src="/vector-12.svg" />
        <img className="sign-up-details-item" alt="" src="/vector-13.svg" />
        <div className="rectangle-parent1" onClick={onFrameContainerClick}>
          <div className="frame-child130" />
          <div className="google">Google</div>
          <img className="google-1-icon" alt="" src="/google-1.svg" />
        </div>
        <div className="rectangle-parent2" onClick={onFrameContainer1Click}>
          <div className="frame-child131" />
          <img className="facebook-1-icon" alt="" src="/facebook-1.svg" />
          <div className="facebook">Facebook</div>
        </div>
        <div className="recover-password">Recover Password</div>
        <div className="default-parent">
          <div className="default" />
          <div className="knob-20" />
          <div className="description">Remember me</div>
        </div>
        <TextField
          className="sign-up-details-inner"
          name="email"
          color="primary"
          label="Email"
          sx={{ width: 552.400390625 }}
          variant="outlined"
          onChange={handleChange}

          
        />
        <TextField
          className="sign-up-details-child1"
          name="password"
          color="primary"
          label="Password"
          sx={{ width: 552.400390625 }}
          variant="outlined"
          type={showPassword ? "text" : "password"} 
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility" : "visibility_off"}</Icon> {/* Toggle eye icon */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          className="button"
          sx={{ width: 552.400390625 }}
          color="secondary"
          variant="contained"
          type="sumbit" 
          onClick={handleAdminSignUp}
        >
          Sign Up
        </Button>
        <div className="create-your-account">Create your account</div>
        <div className="welcome-sign">Welcome - Sign Up</div>
      </div>
      <img className="admin-sign-up-item" alt="" src="/rectangle-1088@2x.png" />
      <img
        className="admin-sign-up-inner"
        alt=""
        src="/rectangle-1089@2x.png"
      />
    </div>
  );
};

export default AdminSignUp;
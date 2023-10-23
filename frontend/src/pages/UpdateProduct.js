import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/admin-apple");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/admin-apple");
  }, [navigate]);

  return (
    <div className="update-product">
      <div className="update-product-child" />
      <div className="frame-parent81">
        <div className="frame18">
          <div className="apple7">Apple</div>
          <div className="apple7">Samsung</div>
          <div className="apple7">Huawei</div>
          <div className="apple7">One Plus</div>
          <div className="apple7">Xiaomi</div>
          <div className="apple7">Vivo</div>
        </div>
        <div className="services8">Category</div>
        <div className="conditions-terms-of-use-our-se-parent1">
          <div className="conditions-terms-of-use-our3">{`Lorem ipsum dolor sit amet consectetur Vitae nunc. `}</div>
          <div className="privacy-policy-parent1">
            <div className="privacy-policy3">Privacy Policy</div>
            <div className="terms-and-condition3">Terms and Condition</div>
          </div>
        </div>
        <div className="help-parent1">
          <div className="help3">HELP</div>
          <div className="my-account-parent1">
            <div className="my-account3">My Account</div>
            <div className="apple7">Free Home Delivery</div>
            <div className="apple7">Cart</div>
            <div className="order-status3">Order Status</div>
          </div>
        </div>
        <div className="services-parent1">
          <div className="services9">Information</div>
          <div className="old-city-streetusa-parent1">
            <div className="old-city-streetusa3">Old city Street,Usa</div>
            <a
              className="about-us6"
              href="https://www.freepikcompany.com/about_us"
              target="_blank"
            >
              About us
            </a>
            <div className="apple7">Check out</div>
            <div className="apple7">Return and refund</div>
          </div>
        </div>
        <div className="social-media-parent1">
          <div className="social-media3">SOCIAL MEDIA</div>
          <div className="frame-parent82">
            <div className="social-icons-parent1">
              <img className="social-icons9" alt="" src="/social-icons31.svg" />
              <img className="social-icons9" alt="" src="/social-icons41.svg" />
              <img className="social-icons9" alt="" src="/social-icons51.svg" />
            </div>
            <div className="wrapper23">
              <div className="apple7">+(00)-000-000-0000</div>
            </div>
            <div className="wrapper23">
              <div className="mobilixgmailcom3">mobilix@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="group-child5" />
        <div className="yoursitename-20203">
          © Mobili-X 2023 | All Rights Reserved
        </div>
        <img className="group-child6" alt="" src="/rectangle-21@2x.png" />
      </div>
      <div className="update-product-inner">
        <div className="instance-wrapper">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="name">Name</div>
      <div className="update-product-inner1">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="price">Price</div>
      <b className="update-or-delete">Update or Delete Product</b>
      <Button
        className="update-product-item"
        color="error"
        size="large"
        variant="contained"
        onClick={onFrameButtonClick}
      >
        Done
      </Button>
      <Button
        className="frame-button"
        color="error"
        size="large"
        variant="contained"
      >
        Update
      </Button>
      <Button
        className="update-product-child1"
        color="error"
        size="large"
        variant="contained"
      >
        Delete
      </Button>
      <Button
        className="update-product-child2"
        color="error"
        size="large"
        variant="contained"
      >
        Update
      </Button>
      <Button
        className="update-product-child3"
        color="error"
        size="large"
        variant="contained"
      >
        Delete
      </Button>
      <Button
        className="update-product-child4"
        color="error"
        size="large"
        variant="contained"
      >
        Update
      </Button>
      <Button
        className="update-product-child5"
        color="error"
        size="large"
        variant="contained"
      >
        Delete
      </Button>
      <Button
        className="update-product-child6"
        color="error"
        size="large"
        variant="contained"
      >
        Update
      </Button>
      <Button
        className="update-product-child7"
        color="error"
        size="large"
        variant="contained"
      >
        Delete
      </Button>
      <Button
        className="update-product-child8"
        color="error"
        size="large"
        variant="contained"
      >
        Update
      </Button>
      <Button
        className="update-product-child9"
        color="error"
        size="large"
        variant="contained"
      >
        Delete
      </Button>
      <Button
        className="update-product-child10"
        color="error"
        size="large"
        variant="contained"
      >
        Update
      </Button>
      <Button
        className="update-product-child11"
        color="error"
        size="large"
        variant="contained"
      >
        Delete
      </Button>
      <Button
        className="update-product-child12"
        color="error"
        size="large"
        variant="contained"
      >
        Update
      </Button>
      <Button
        className="update-product-child13"
        color="error"
        size="large"
        variant="contained"
      >
        Delete
      </Button>
      <Button
        className="update-product-child14"
        color="error"
        size="large"
        variant="contained"
      >
        Update
      </Button>
      <Button
        className="update-product-child15"
        color="error"
        size="large"
        variant="contained"
      >
        Delete
      </Button>
      <div className="price1">Price</div>
      <TextField
        className="update-product-child16"
        color="primary"
        sx={{ width: 450 }}
        variant="outlined"
      />
      <div className="name1">Name</div>
      <TextField
        className="update-product-child17"
        color="primary"
        sx={{ width: 450 }}
        variant="outlined"
      />
      <div className="price2">Price</div>
      <div className="update-product-inner2">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="name2">Name</div>
      <div className="update-product-inner3">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="price3">Price</div>
      <div className="update-product-inner4">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="name3">Name</div>
      <div className="update-product-inner5">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="price4">Price</div>
      <div className="update-product-inner6">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="name4">Name</div>
      <div className="update-product-inner7">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="price5">Price</div>
      <div className="update-product-inner8">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="name5">Name</div>
      <div className="update-product-inner9">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="price6">Price</div>
      <div className="update-product-inner10">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="name6">Name</div>
      <div className="update-product-inner11">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="price7">Price</div>
      <div className="update-product-inner12">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="name7">Name</div>
      <div className="update-product-inner13">
        <div className="instance-container">
          <TextField
            className="frame-textfield"
            color="primary"
            sx={{ width: 450 }}
            variant="outlined"
          />
        </div>
      </div>
      <div className="frame-parent83">
        <div className="frame19" />
        <img className="group-child7" alt="" src="/rectangle-3@2x.png" />
        <div className="frame20">
          <div className="empowering-your-mobile3">
            Empowering Your Mobile Lifestyle
          </div>
        </div>
        <div className="frame21">
          <b className="b3">+(00)-000-000-0000</b>
        </div>
        <div className="frame22">
          <div className="frame-parent84">
            <div className="home-our-pricing-parent1">
              <b className="home16" onClick={onHomeClick}>
                Home
              </b>
              <b className="home17">About Us</b>
              <b className="home17">shop</b>
              <b className="home17">Collection</b>
              <b className="home17">Page</b>
            </div>
            <div className="group-parent2">
              <img className="frame-child120" alt="" src="/group-491.svg" />
              <img className="frame-child120" alt="" src="/group-21.svg" />
              <img className="frame-child120" alt="" src="/group-11.svg" />
              <img className="frame-child120" alt="" src="/group-31.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="update-product-child18" />
    </div>
  );
};

export default UpdateProduct;

import React, { useCallback, useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AdminApple.css";
import axios from 'axios';

const AdminApple = () => {
  const navigate = useNavigate();
  const [mobileData,setMobileData] = useState([]);

  useEffect(()=>{
    const getPost = async () =>{
      const response = await axios.get('http://localhost:3005/api/v1/mobile/all');
      setMobileData(response.data);
      console.log(response);
    }
    getPost();
  },[])

  const handleDelete = async (id) =>{
    try {
      await axios.delete('http://localhost:3005/api/v1/mobile/' + id);
      
      window.location.reload();
    } catch (error) {
      console.error("Error while deleting:", error);
    }
  }

const MobileCard = ({ imageSrc, name, price, _id }) => {
    return (
      <Card className="mobile-card">
        <CardMedia
          component="img"
          alt="Mobile Image"
          style={{ width: '250px', height: '200px' }}
          src={imageSrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price}
          </Typography>
        </CardContent>
        <CardActions className="card-buttons">
          <Button size="small" color="primary" variant="contained"
          onClick={() => navigate('/update-post/'+_id)}>
            Update
          </Button>
          <Button size="small" color="error" variant="contained"
          onClick={(e)=>handleDelete(_id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  };

  const cards = [
    {
      imageSrc: "/mb1.jpg",
      name: "Mobile 1",
      price: "$500",
    },
    {
      imageSrc: "/mb2.jpg",
      name: "Mobile 2",
      price: "$600",
    },
    {
      imageSrc: "/mb3.jpg",
      name: "Mobile 3",
      price: "$700",
    },
    {
      imageSrc: "/mb4.jpg",
      name: "Mobile 4",
      price: "$800",
    },
    {
      imageSrc: "/mb5.jpg",
      name: "Mobile 5",
      price: "$900",
    },
    {
      imageSrc: "/mb6.jpg",
      name: "Mobile 6",
      price: "$1000",
    },
    {
      imageSrc: "/mb7.jpg",
      name: "Mobile 7",
      price: "$1100",
    },
    {
      imageSrc: "/mb8.jpg",
      name: "Mobile 8",
      price: "$1200",
    },
  ];

  const onGroupButtonClick = useCallback(() => {
    navigate("/add-product");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (

    <div className="admin-apple">
      <img className="admin-apple-child" alt="image"  />
      <div
        className="banner" data-animate-on-scroll
      >
        <img className="banner1" alt="hero" src="/banner.jpg"  data-animate-on-scroll/>
        
      </div>
      <div className="frame-parent8">
        <div className="latest-deals-parent">
          <div className="latest-deals">Latest Deals</div>
          <img className="dropdown-icon" alt="" src="/dropdown.svg" />
        </div>

        
        <div className="flash-deals-wrapper">
          <div className="latest-deals">Flash Deals</div>
        </div>
        <div className="latest-deals">Popular of the Week</div>
        <div className="latest-deals">Popular of the Month</div>
        <div className="latest-deals">Trending</div>
        <div className="latest-deals">Coupons</div>
        <div className="latest-deals">Brands</div>
        <div className="latest-deals">About Us</div>
        <div className="latest-deals">Services</div>
      </div>
      
      

      <footer className="rectangle-footer" />
      <div className="group-div">
        <div className="frame8">
          <div className="apple1">Apple</div>
          <div className="apple1">Samsung</div>
          <div className="apple1">Huawei</div>
          <div className="apple1">One Plus</div>
          <div className="apple1">Xiaomi</div>
          <div className="apple1">Vivo</div>
        </div>
        <div className="services3">Category</div>
        <div className="conditions-terms-of-use-our-se-group">
          <div className="conditions-terms-of-use-our1">{`Lorem ipsum dolor sit amet consectetur Vitae nunc. `}</div>
          <div className="privacy-policy-group">
            <div className="privacy-policy1">Privacy Policy</div>
            <div className="terms-and-condition1">Terms and Condition</div>
          </div>
        </div>
        <div className="help-group">
          <div className="help1">HELP</div>
          <div className="my-account-group">
            <div className="my-account1">My Account</div>
            <div className="apple1">Free Home Delivery</div>
            <div className="apple1">Cart</div>
            <div className="order-status1">Order Status</div>
          </div>
        </div>
        <div className="services-group">
          <div className="services4">Information</div>
          <div className="old-city-streetusa-group">
            <div className="old-city-streetusa1">Old city Street,Usa</div>
            <a
              className="about-us3"
              href="https://www.freepikcompany.com/about_us"
              target="_blank"
            >
              About us
            </a>
            <div className="apple1">Check out</div>
            <div className="apple1">Return and refund</div>
          </div>
        </div>
        <div className="social-media-group">
          <div className="social-media1">SOCIAL MEDIA</div>
          <div className="frame-parent21">
            <div className="social-icons-group">
              <img
                className="rectangle-parent"
                alt=""
                src="/social-icons6.svg"
              />
              <img
                className="rectangle-parent"
                alt=""
                src="/social-icons7.svg"
              />
              <img
                className="rectangle-parent"
                alt=""
                src="/social-icons8.svg"
              />
            </div>
            <div className="mobilixgmailcom-container">
              <div className="apple1">+(00)-000-000-0000</div>
            </div>
            <div className="mobilixgmailcom-container">
              <div className="mobilixgmailcom1">mobilix@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="group-item" />
        <div className="yoursitename-20201">
          © Mobili-X 2023 | All Rights Reserved
        </div>
        <img className="group-inner" alt="" src="/rectangle-22@2x.png" />
      </div>
      <div className="tech-solutions-inc1">Tech Solutions Inc.</div>
      <div className="frame-parent22">
        <div className="frame-parent23">
          <div className="rectangle-parent">
            <div className="frame-child47" />
            <img className="vector-icon87" alt="" src="/vector2.svg" />
          </div>
          <div className="apple-parent">
            <div className="in-stock">Apple</div>
            <div className="selected">10</div>
          </div>
        </div>
        <div className="frame-parent23">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">Samsung</div>
            <div className="selected">5</div>
          </div>
        </div>
        <div className="frame-parent23">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">Huawei</div>
            <div className="selected">5</div>
          </div>
        </div>
        <div className="frame-parent23">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">One Plus</div>
            <div className="selected">5</div>
          </div>
        </div>
        <div className="frame-parent23">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">Xiaomi</div>
            <div className="selected">5</div>
          </div>
        </div>
        <div className="frame-parent23">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">Vivo</div>
            <div className="selected">5</div>
          </div>
        </div>
      </div>
      <div className="frame-parent29">
        <div className="selected-parent">
          <div className="selected">0 selected</div>
          <div className="reset">Reset</div>
        </div>
        <div className="frame-parent30">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">In stock</div>
            <div className="selected">5</div>
          </div>
        </div>
        <div className="frame-parent31">
          <div className="rectangle-parent">
            <div className="frame-child54" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">Out of stock</div>
            <div className="div37">0</div>
          </div>
        </div>
      </div>
      <div className="frame-parent32">
        <div className="selected-group">
          <div className="selected">0 selected</div>
          <div className="reset">Reset</div>
        </div>
        <div className="frame-parent23">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">64 GB</div>
            <div className="selected">5</div>
          </div>
        </div>
        <div className="frame-parent23">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">128 GB</div>
            <div className="selected">5</div>
          </div>
        </div>
        <div className="frame-parent23">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">256 GB</div>
            <div className="selected">5</div>
          </div>
        </div>
        <div className="frame-parent23">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">512 GB</div>
            <div className="selected">5</div>
          </div>
        </div>
      </div>
      <div className="frame-parent37">
        <div className="selected-parent">
          <div className="selected">0 selected</div>
          <div className="reset">Reset</div>
        </div>
        <div className="frame-parent30">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">Smart-Phones</div>
            <div className="selected">5</div>
          </div>
        </div>
      </div>
      <div className="frame-parent39">
        <div className="selected-parent">
          <div className="selected">0 selected</div>
          <div className="reset">Reset</div>
        </div>
        <div className="frame-parent30">
          <div className="rectangle-parent">
            <div className="frame-child48" />
          </div>
          <div className="samsung-parent">
            <div className="in-stock">Apple</div>
            <div className="selected">5</div>
          </div>
        </div>
      </div>
      <div className="frame-parent41">
        <div className="selected-parent">
          <div className="selected">0 selected</div>
          <div className="reset">Reset</div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-wrapper">
            <div className="ellipse-parent1">
              <div className="frame-child61" />
              <div className="frame-child62" />
              <div className="frame-child63" />
              <div className="frame-child64" />
              <div className="frame-child65" />
              <div className="frame-child66" />
              <div className="frame-child67" />
              <div className="frame-child68" />
              <div className="frame-child69" />
            </div>
          </div>
        </div>
      </div>

      <div className="brands-parent">
        <div className="avaliability">Brands</div>
        <div className="reset">Reset</div>
      </div>
      <div className="avaliability-wrapper">
        <div className="avaliability">Avaliability</div>
      </div>
      <div className="product-type-wrapper">
        <div className="avaliability">Product type</div>
      </div>
      <div className="brand-wrapper">
        <div className="avaliability">Brand</div>
      </div>
      <div className="storage">Storage</div>
      <div className="color-wrapper">
        <div className="avaliability">Color</div>
      </div>
      <div className="admin-apple-child1" />
      <div className="admin-apple-child2" />
      <div className="admin-apple-child3" />
      <div className="admin-apple-child4" />
      <div className="admin-apple-child5" />
      <div className="admin-apple-child6" />
      
     
      <div className="mobile-cards-container">
        {mobileData.map((mobile, index) => (
          <MobileCard
            key={index}
            imageSrc={mobile.image}
            name={mobile.name}
            price={mobile.price}
            _id = {mobile._id}
          />
          )
         )
        }
      </div>
      
      <Button
        className="admin-apple-child7"
        sx={{ width: 193 }}
        color="error"
        size="large"
        variant="contained"
        onClick={onGroupButtonClick}
      >
        Add Product
      </Button>
      <div className="frame-parent42">
        <div className="frame9" />
        <img className="group-child1" alt="" src="/rectangle-3@2x.png" />
        <div className="frame10">
          <div className="empowering-your-mobile1">
            Empowering Your Mobile Lifestyle
          </div>
        </div>
        <div className="frame11">
          <b className="b1">+(00)-000-000-0000</b>
        </div>
        <div className="frame12">
          <div className="frame-parent43">
            <div className="home-our-pricing-group">
              <b className="home6" onClick={onHomeClick}>
                Home
              </b>
              <b className="home7">About Us</b>
              <b className="home7">shop</b>
              <b className="home7">Collection</b>
              <b className="home7">Page</b>
            </div>
            <div className="group-container">
              <img className="frame-child70" alt="" src="/group-491.svg" />
              <img className="frame-child70" alt="" src="/group-21.svg" />
              <img className="frame-child70" alt="" src="/group-11.svg" />
              <img className="frame-child70" alt="" src="/group-31.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AdminApple;
import React, { useEffect } from 'react'
import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
import { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
const updatePost = () => {

    const _id = useParams();
    const id = _id.id;
    console.log(id);
    const handleInput = (e) =>{
        setPost({...post,[e.target.name]:e.target.value})
      }
    
      
    const [post,setPost] = useState({})
      const navigate = useNavigate();
    
      const onFrameButtonClick = async() => {
        console.log(post);
        const response = await axios.put('http://localhost:3005/api/v1/mobile/'+id,post)
        console.log(response);
        navigate("/admin-apple");
      };
    
      const onHomeClick = useCallback(() => {
        navigate("/admin-apple");
      }, [navigate]);
    
    

    useEffect(()=>{
        const getPost = async() => {
            const response = await axios.get('http://localhost:3005/api/v1/mobile/'+id)
            console.log(response.data);
            setPost(response.data)
        }

        getPost();
    },[])
  return (
    <div className="add-product">
      <div className="add-product-child" />
      <div className="frame-parent85">
        <div className="frame23">
          <div className="apple8">Apple</div>
          <div className="apple8">Samsung</div>
          <div className="apple8">Huawei</div>
          <div className="apple8">One Plus</div>
          <div className="apple8">Xiaomi</div>
          <div className="apple8">Vivo</div>
        </div>
        <div className="services10">Category</div>
        <div className="conditions-terms-of-use-our-se-parent2">
          <div className="conditions-terms-of-use-our4">{`Lorem ipsum dolor sit amet consectetur Vitae nunc. `}</div>
          <div className="privacy-policy-parent2">
            <div className="privacy-policy4">Privacy Policy</div>
            <div className="terms-and-condition4">Terms and Condition</div>
          </div>
        </div>
        <div className="help-parent2">
          <div className="help4">HELP</div>
          <div className="my-account-parent2">
            <div className="my-account4">My Account</div>
            <div className="apple8">Free Home Delivery</div>
            <div className="apple8">Cart</div>
            <div className="order-status4">Order Status</div>
          </div>
        </div>
        <div className="services-parent2">
          <div className="services11">Information</div>
          <div className="old-city-streetusa-parent2">
            <div className="old-city-streetusa4">Old city Street,Usa</div>
            <a
              className="about-us7"
              href="https://www.freepikcompany.com/about_us"
              target="_blank"
            >
              About us
            </a>
            <div className="apple8">Check out</div>
            <div className="apple8">Return and refund</div>
          </div>
        </div>
        <div className="social-media-parent2">
          <div className="social-media4">SOCIAL MEDIA</div>
          <div className="frame-parent86">
            <div className="social-icons-parent2">
              <img
                className="social-icons12"
                alt=""
                src="/social-icons31.svg"
              />
              <img
                className="social-icons12"
                alt=""
                src="/social-icons41.svg"
              />
              <img
                className="social-icons12"
                alt=""
                src="/social-icons51.svg"
              />
            </div>
            <div className="wrapper24">
              <div className="apple8">+(00)-000-000-0000</div>
            </div>
            <div className="wrapper24">
              <div className="mobilixgmailcom4">mobilix@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="group-child8" />
        <div className="yoursitename-20204">
          © Mobili-X 2023 | All Rights Reserved
        </div>
        <img className="group-child9" alt="" src="/rectangle-21@2x.png" />
      </div>
      <div className="add-product-inner">
        <div className="name-parent">
          <div className="name8">Name</div>
          <TextField
            className="frame-child124"
            color="primary"
            sx={{ width: 661 }}
            variant="outlined"
            name="name"
            onChange={handleInput}
            placeholder={post.name}
          />
          <div className="name8">Image</div>
          <TextField
            className="frame-child124"
            color="primary"
            sx={{ width: 661 }}
            variant="outlined"
            name="image"
            onChange={handleInput}
            
          />
        </div>
      </div>
      <div className="price-parent">
        <div className="name8">Price</div>
        <TextField
          className="frame-child124"
          color="primary"
          sx={{ width: 661 }}
          variant="outlined"
          name="price"
          onChange={handleInput}
          placeholder={post.price}
        />
      </div>
      <b className="add-product1">Update Product</b>
      <div className="add-product-item" />
      <Button
        className="add-product-child1"
        color="error"
        size="large"
        variant="contained"
        onClick={()=>onFrameButtonClick()}
      >
        Done
      </Button>
      <div className="frame-parent87">
        <div className="frame24" />
        <img className="group-child10" alt="" src="/rectangle-3@2x.png" />
        <div className="frame25">
          <div className="empowering-your-mobile4">
            Empowering Your Mobile Lifestyle
          </div>
        </div>
        <div className="frame26">
          <b className="b4">+(00)-000-000-0000</b>
        </div>
        <div className="frame27">
          <div className="frame-parent88">
            <div className="home-our-pricing-parent2">
              <b className="home21" onClick={onHomeClick}>
                Home
              </b>
              <b className="home22">About Us</b>
              <b className="home22">shop</b>
              <b className="home22">Collection</b>
              <b className="home22">Page</b>
            </div>
            <div className="group-parent3">
              <img className="frame-child126" alt="" src="/group-492.svg" />
              <img className="frame-child126" alt="" src="/group-221.svg" />
              <img className="frame-child126" alt="" src="/group-12.svg" />
              <img className="frame-child126" alt="" src="/group-321.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default updatePost
import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onGroupButtonClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/user-log-in");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/user-apple");
  }, [navigate]);


  
  return (

    <div className="home">
      <div className="page-1">
        <div className="frame" data-animate-on-scroll>
          <div className="mobili-x-container">
            <p className="mobili-x">
              <b>Mobili - X</b>
            </p>
            <p className="your-destination-for-mobile-ma">
              <span>
                <span>{`Your Destination for `}</span>
                <span className="mobile">Mobile</span>
                <span className="marvels"> Marvels.</span>
              </span>
            </p>
          </div>
        </div>
        <Button
          className="page-1-child"
          sx={{ width: 365 }}
          color="info"
          size="large"
          variant="contained"
          onClick={onGroupButtonClick}
        >
          SIGN IN
        </Button>
        <Button
          className="page-1-item"
          sx={{ width: 365 }}
          color="info"
          size="large"
          target="_parent"
          variant="contained"
          onClick={onGroupButton1Click}
        >
          SIGN UP
        </Button>
        <div className="frame1">
          <img className="frame-child" alt="" src="/rectangle-161@2x.png" />
        </div>
        <div className="frame-parent">
          <div className="frame2" />
          <img className="group-child" alt="" src="/rectangle-3@2x.png" />
          <div className="frame3">
            <div className="empowering-your-mobile">
              Empowering Your Mobile Lifestyle
            </div>
          </div>
          <div className="frame4">
            <b className="b">+(00)-000-000-0000</b>
          </div>
          <div className="frame5">
            <div className="frame-group">
              <div className="home-our-pricing-parent">
                <b className="home1">Home</b>
                <b className="home1">About Us</b>
                <b className="home1">shop</b>
                <b className="home1">Collection</b>
                <b className="home1">Page</b>
              </div>
              <div className="group-parent">
                <img className="frame-item" alt="" src="/group-49.svg" />
                <img className="frame-item" alt="" src="/group-2.svg" />
                <img className="frame-item" alt="" src="/group-1.svg" />
                <img className="frame-item" alt="" src="/group-3.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame6">
        <div className="page-5">
          <div className="page-5-child" />
          <div className="frame-container">
            <div className="frame7">
              <div className="apple">Apple</div>
              <div className="apple">Samsung</div>
              <div className="apple">Huawei</div>
              <div className="apple">One Plus</div>
              <div className="apple">Xiaomi</div>
              <div className="apple">Vivo</div>
            </div>
            <div className="services">Category</div>
            <div className="conditions-terms-of-use-our-se-parent">
              <div className="conditions-terms-of-use-our">{`Lorem ipsum dolor sit amet consectetur Vitae nunc. `}</div>
              <div className="privacy-policy-parent">
                <div className="privacy-policy">Privacy Policy</div>
                <div className="terms-and-condition">Terms and Condition</div>
              </div>
            </div>
            <div className="help-parent">
              <div className="help">HELP</div>
              <div className="my-account-parent">
                <div className="my-account">My Account</div>
                <div className="apple">Free Home Delivery</div>
                <div className="apple">Cart</div>
                <div className="order-status">Order Status</div>
              </div>
            </div>
            <div className="services-parent">
              <div className="services1">Information</div>
              <div className="old-city-streetusa-parent">
                <div className="old-city-streetusa">Old city Street,Usa</div>
                <a
                  className="about-us"
                  href="https://www.freepikcompany.com/about_us"
                  target="_blank"
                >
                  About us
                </a>
                <div className="apple">Check out</div>
                <div className="apple">Return and refund</div>
              </div>
            </div>
            <div className="social-media-parent">
              <div className="social-media">SOCIAL MEDIA</div>
              <div className="frame-div">
                <div className="social-icons-parent">
                  <img
                    className="social-icons"
                    alt=""
                    src="/social-icons.svg"
                  />
                  <img
                    className="social-icons"
                    alt=""
                    src="/social-icons1.svg"
                  />
                  <img
                    className="social-icons"
                    alt=""
                    src="/social-icons2.svg"
                  />
                </div>
                <div className="wrapper">
                  <div className="apple">+(00)-000-000-0000</div>
                </div>
                <div className="wrapper">
                  <div className="mobilixgmailcom">mobilix@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="rectangle-div" />
            <div className="yoursitename-2020">
              © Mobili-X 2023 | All Rights Reserved
            </div>
            <img className="rectangle-icon" alt="" src="/rectangle-2@2x.png" />
          </div>
          <div className="our-services">Our Services</div>
          <div className="tech-solutions-inc">Tech Solutions Inc.</div>
          <img
            className="page-5-item"
            alt=""
            src="/rectangle-1080@2x.png"
            data-animate-on-scroll
          />
          <img
            className="page-5-inner"
            alt=""
            src="/rectangle-1081@2x.png"
            data-animate-on-scroll
          />
          <img
            className="page-5-child1"
            alt=""
            src="/rectangle-1082@2x.png"
            data-animate-on-scroll
          />
          <div className="page-5-child2" />
          <div className="page-5-child3" />
          <div className="page-5-child4" />
          <b className="island-wide-delivery">Island Wide Delivery</b>
          <b className="easy-payment-methods">Easy Payment Methods</b>
          <b className="day-money">7 Day - Money Back Guarantee</b>
        </div>
        <div className="page-3">
          <div className="page-3-child" />
          <div className="page-3-item" />
          <div className="page-3-inner" />
          <div className="ellipse-div" />
          <img className="page-3-child1" alt="" src="/rectangle-172@2x.png" />
          <img className="page-3-child2" alt="" src="/rectangle-173@2x.png" />
          <b className="about-us1" data-animate-on-scroll>
            About Us
          </b>
          <b className="welcome-to-our" data-animate-on-scroll>
            Welcome to our mobile world! We're the passionate team behind the
            scenes, dedicated to bringing you the best in mobile technology. Our
            mission is simple: to provide you with the latest innovations and an
            array of choices. We believe in enhancing your lifestyle, keeping
            you connected, and helping you achieve your goals through
            cutting-edge devices and top-notch accessories. Join us in our
            journey to make your mobile dreams a reality
          </b>
          <div className="lets-grab-your-container" data-animate-on-scroll>
            <span className="lets-grab-your-container1">
              <p className="mobili-x">Let’s</p>
              <p className="mobili-x">{`Grab Your `}</p>
              <p className="mobili-x">Dream Mobile</p>
            </span>
          </div>
          <Button
            className="group-button"
            sx={{ width: 317 }}
            color="info"
            size="large"
            variant="contained"
            onClick={onGroupButton2Click}
          >
            VIEW PRODUCTS
          </Button>
          <div className="ellipse-parent">
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
            <div className="frame-child2" />
          </div>
          <div className="ellipse-group">
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
            <div className="frame-child22" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

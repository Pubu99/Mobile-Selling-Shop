import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserApple.css";

const UserApple = () => {
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

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="user-apple">
      <img className="user-apple-child" alt="" src="/line-4.svg" />
      <div className="frame-parent44">
        <div className="latest-deals-group">
          <div className="latest-deals1">Latest Deals</div>
          <img className="dropdown-icon1" alt="" src="/dropdown.svg" />
        </div>
        <div className="flash-deals-container">
          <div className="latest-deals1">Flash Deals</div>
        </div>
        <div className="latest-deals1">Popular of the Week</div>
        <div className="latest-deals1">Popular of the Month</div>
        <div className="latest-deals1">Trending</div>
        <div className="latest-deals1">Coupons</div>
        <div className="latest-deals1">Brands</div>
        <div className="latest-deals1">About Us</div>
        <div className="latest-deals1">Services</div>
      </div>
      <div
        className="hero-endframe-cvklg0xk3w6e-la-group"
        data-animate-on-scroll
      >
        <img
          className="hero-endframe-cvklg0xk3w6e-la-icon1"
          alt=""
          src="/hero-endframe--cvklg0xk3w6e-large-2@2x.png"
        />
        <div className="px-apple-gray-logo-1-group">
          <img
            className="px-apple-gray-logo-1-icon1"
            alt=""
            src="/1200pxapple-gray-logo-1@2x.png"
          />
          <div className="iphone-14-series1">iPhone 14 Series</div>
        </div>
        <div className="up-to-101">Up to 10% off Voucher</div>
        <div className="frame-parent45">
          <div className="shop-now-group">
            <div className="shop-now1">Shop Now</div>
            <div className="frame-child74" />
          </div>
          <img className="dropdown-icon1" alt="" src="/icons-arrowright.svg" />
        </div>
        <div className="ellipse-parent2">
          <div className="frame-child75" />
          <div className="frame-child75" />
          <div className="frame-child77" />
          <div className="frame-child75" />
          <div className="frame-child75" />
        </div>
      </div>
      <img className="user-apple-item" alt="" src="/line-31.svg" />
      <div className="user-apple-inner">
        <div className="frame-parent46">
          <div className="frame-parent47">
            <div className="frame-parent48">
              <div className="instance-group">
                <div className="rectangle-wrapper12">
                  <div className="instance-item" />
                </div>
                <div className="our-products1">Our Products</div>
              </div>
              <div className="explore-our-products1">Explore Our Products</div>
            </div>
            <div className="fill-with-left-arrow-group">
              <img
                className="fill-with-left-arrow2"
                alt=""
                src="/fill-with-left-arrow.svg"
              />
              <img
                className="fill-with-left-arrow2"
                alt=""
                src="/fill-with-right-arrow.svg"
              />
            </div>
          </div>
          <div className="frame-parent49">
            <div className="cart-container">
              <div className="cart22">
                <div className="cart23">
                  <div className="fill-heart-parent12">
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-eye2.svg"
                    />
                  </div>
                  <div className="rdoexxtrl-1-frame">
                    <img
                      className="rdoexxtrl-1-icon2"
                      alt=""
                      src="/71rdoexxtrl-11@2x.png"
                    />
                  </div>
                </div>
                <div className="breed-dry-dog-food-container">
                  <div className="shop-now1">Apple Iphone 14 Pro</div>
                  <div className="frame-parent50">
                    <div className="flash-deals-container">
                      <div className="shop-now1">$100</div>
                    </div>
                    <div className="three-star-container">
                      <div className="flash-deals-container">
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon91"
                          alt=""
                          src="/vector1.svg"
                        />
                        <img
                          className="vector-icon91"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="div45">(35)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart24">
                <div className="cart23">
                  <div className="cart-child1" />
                  <div className="add-to-cart2">Add To Cart</div>
                  <div className="fill-heart-parent12">
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-eye2.svg"
                    />
                  </div>
                  <div className="eos-250d-03-500x500-1-frame">
                    <img
                      className="eos-250d-03-500x500-1-icon2"
                      alt=""
                      src="/eos250d03500x500-11@2x.png"
                    />
                  </div>
                </div>
                <div className="canon-eos-dslr-camera-container">
                  <div className="shop-now1">Apple Iphone 13 Pro</div>
                  <div className="frame-parent50">
                    <div className="flash-deals-container">
                      <div className="shop-now1">$360</div>
                    </div>
                    <div className="three-star-container">
                      <div className="flash-deals-container">
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon91"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="div45">(95)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart22">
                <div className="cart23">
                  <div className="fill-heart-parent12">
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-eye2.svg"
                    />
                  </div>
                  <div className="ideapad-gaming-3i-01-500x500-1-frame">
                    <img
                      className="ideapad-gaming-3i-01-500x500-1-icon2"
                      alt=""
                      src="/ideapadgaming3i01500x500-1@2x.png"
                    />
                  </div>
                </div>
                <div className="breed-dry-dog-food-container">
                  <div className="shop-now1">Apple Iphone 12 Pro</div>
                  <div className="frame-parent50">
                    <div className="flash-deals-container">
                      <div className="shop-now1">$700</div>
                    </div>
                    <div className="three-star-container">
                      <div className="flash-deals-container">
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="div49">(325)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart22">
                <div className="cart23">
                  <div className="fill-heart-parent12">
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-eye2.svg"
                    />
                  </div>
                  <img
                    className="cart-child2"
                    alt=""
                    src="/frame-6043@2x.png"
                  />
                  <div className="curology-j7pkvqrtusm-unsplash1" />
                </div>
                <div className="breed-dry-dog-food-container">
                  <div className="shop-now1">Apple Iphone 11 Pro</div>
                  <div className="frame-parent50">
                    <div className="flash-deals-container">
                      <div className="shop-now1">$500</div>
                    </div>
                    <div className="three-star-container">
                      <div className="flash-deals-container">
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon91"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="div49">(145)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-parent1">
              <div className="cart22">
                <div className="cart23">
                  <div className="fill-heart-parent12">
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-eye2.svg"
                    />
                  </div>
                  <div className="new-button5">
                    <div className="new5">NEW</div>
                  </div>
                  <div className="new-mercedes-benz-gtr-licensed-frame">
                    <img
                      className="new-mercedes-benz-gtr-licensed-icon2"
                      alt=""
                      src="/newmercedesbenzgtrlicensedrideoncarkidselectrictoycar-1@2x.png"
                    />
                  </div>
                </div>
                <div className="kids-electric-car-container">
                  <div className="shop-now1">Apple Iphone X</div>
                  <div className="frame-parent50">
                    <div className="flash-deals-container">
                      <div className="shop-now1">$960</div>
                    </div>
                    <div className="three-star-container">
                      <div className="flash-deals-container">
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="div45">(65)</div>
                    </div>
                  </div>
                  <div className="fill-with-left-arrow-group">
                    <img
                      className="colour-chnage-child12"
                      alt=""
                      src="/group-10000059353.svg"
                    />
                    <div className="colour-chnage-child13" />
                  </div>
                </div>
              </div>
              <div className="cart31">
                <div className="cart23">
                  <div className="fill-heart-parent12">
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-eye2.svg"
                    />
                  </div>
                  <div className="copa-sense-1-frame">
                    <div className="copa-sense-11" />
                  </div>
                </div>
                <div className="breed-dry-dog-food-container">
                  <div className="shop-now1">Apple Iphone 8 Plus</div>
                  <div className="frame-parent50">
                    <div className="flash-deals-container">
                      <div className="shop-now1">$1160</div>
                    </div>
                    <div className="three-star-container">
                      <div className="flash-deals-container">
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="div45">(35)</div>
                    </div>
                  </div>
                  <div className="fill-with-left-arrow-group">
                    <img
                      className="colour-chnage-child12"
                      alt=""
                      src="/group-10000059351.svg"
                    />
                    <div className="colour-chnage-child13" />
                  </div>
                </div>
              </div>
              <div className="cart22">
                <div className="cart23">
                  <div className="fill-heart-parent12">
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className="fill-heart-icon15"
                      alt=""
                      src="/fill-eye2.svg"
                    />
                  </div>
                  <div className="new-button6">
                    <div className="new6">NEW</div>
                  </div>
                  <div className="gp11-prd3-1-frame">
                    <img
                      className="gp11-prd3-1-icon2"
                      alt=""
                      src="/gp11-prd3-1@2x.png"
                    />
                  </div>
                </div>
                <div className="kids-electric-car-container">
                  <div className="shop-now1">Apple Iphone 7 Plus</div>
                  <div className="frame-parent50">
                    <div className="flash-deals-container">
                      <div className="shop-now1">$660</div>
                    </div>
                    <div className="three-star-container">
                      <div className="flash-deals-container">
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon88"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="star-half-filled-icon3"
                          alt=""
                          src="/starhalffilled3.svg"
                        />
                      </div>
                      <div className="div45">(55)</div>
                    </div>
                  </div>
                  <div className="fill-with-left-arrow-group">
                    <img
                      className="colour-chnage-child12"
                      alt=""
                      src="/group-1000005935.svg"
                    />
                    <div className="colour-chnage-child13" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="user-apple-child1" />
      <div className="frame-parent57">
        <div className="frame13">
          <div className="apple4">Apple</div>
          <div className="apple4">Samsung</div>
          <div className="apple4">Huawei</div>
          <div className="apple4">One Plus</div>
          <div className="apple4">Xiaomi</div>
          <div className="apple4">Vivo</div>
        </div>
        <div className="services6">Category</div>
        <div className="conditions-terms-of-use-our-se-container">
          <div className="conditions-terms-of-use-our2">{`Lorem ipsum dolor sit amet consectetur Vitae nunc. `}</div>
          <div className="privacy-policy-container">
            <div className="privacy-policy2">Privacy Policy</div>
            <div className="terms-and-condition2">Terms and Condition</div>
          </div>
        </div>
        <div className="help-container">
          <div className="help2">HELP</div>
          <div className="my-account-container">
            <div className="my-account2">My Account</div>
            <div className="apple4">Free Home Delivery</div>
            <div className="apple4">Cart</div>
            <div className="order-status2">Order Status</div>
          </div>
        </div>
        <div className="services-container">
          <div className="services7">Information</div>
          <div className="old-city-streetusa-container">
            <div className="old-city-streetusa2">Old city Street,Usa</div>
            <a
              className="about-us5"
              href="https://www.freepikcompany.com/about_us"
              target="_blank"
            >
              About us
            </a>
            <div className="apple4">Check out</div>
            <div className="apple4">Return and refund</div>
          </div>
        </div>
        <div className="social-media-container">
          <div className="social-media2">SOCIAL MEDIA</div>
          <div className="frame-parent58">
            <div className="social-icons-container">
              <img
                className="rectangle-group"
                alt=""
                src="/social-icons3.svg"
              />
              <img
                className="rectangle-group"
                alt=""
                src="/social-icons4.svg"
              />
              <img
                className="rectangle-group"
                alt=""
                src="/social-icons5.svg"
              />
            </div>
            <div className="mobilixgmailcom-frame">
              <div className="apple4">+(00)-000-000-0000</div>
            </div>
            <div className="mobilixgmailcom-frame">
              <div className="mobilixgmailcom2">mobilix@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="group-child2" />
        <div className="yoursitename-20202">
          © Mobili-X 2023 | All Rights Reserved
        </div>
        <img className="group-child3" alt="" src="/rectangle-22@2x.png" />
      </div>
      <div className="tech-solutions-inc2">Tech Solutions Inc.</div>
      <div className="frame-parent59">
        <div className="frame-parent60">
          <div className="rectangle-group">
            <div className="frame-child80" />
            <img className="vector-icon122" alt="" src="/vector2.svg" />
          </div>
          <div className="apple-container">
            <div className="apple5">Apple</div>
            <div className="div59">10</div>
          </div>
        </div>
        <div className="frame-parent60">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">Samsung</div>
            <div className="div59">5</div>
          </div>
        </div>
        <div className="frame-parent60">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">Huawei</div>
            <div className="div59">5</div>
          </div>
        </div>
        <div className="frame-parent60">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">One Plus</div>
            <div className="div59">5</div>
          </div>
        </div>
        <div className="frame-parent60">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">Xiaomi</div>
            <div className="div59">5</div>
          </div>
        </div>
        <div className="frame-parent60">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">Vivo</div>
            <div className="div59">5</div>
          </div>
        </div>
      </div>
      <div className="frame-parent66">
        <div className="selected-parent3">
          <div className="div59">0 selected</div>
          <div className="reset6">Reset</div>
        </div>
        <div className="frame-parent67">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">In stock</div>
            <div className="div59">5</div>
          </div>
        </div>
        <div className="frame-parent68">
          <div className="rectangle-group">
            <div className="frame-child87" />
          </div>
          <div className="samsung-group">
            <div className="apple5">Out of stock</div>
            <div className="div66">0</div>
          </div>
        </div>
      </div>
      <div className="frame-parent69">
        <div className="selected-parent4">
          <div className="div59">0 selected</div>
          <div className="reset6">Reset</div>
        </div>
        <div className="frame-parent60">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">64 GB</div>
            <div className="div59">5</div>
          </div>
        </div>
        <div className="frame-parent60">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">128 GB</div>
            <div className="div59">5</div>
          </div>
        </div>
        <div className="frame-parent60">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">256 GB</div>
            <div className="div59">5</div>
          </div>
        </div>
        <div className="frame-parent60">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">512 GB</div>
            <div className="div59">5</div>
          </div>
        </div>
      </div>
      <div className="frame-parent74">
        <div className="selected-parent3">
          <div className="div59">0 selected</div>
          <div className="reset6">Reset</div>
        </div>
        <div className="frame-parent67">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">Smart-Phones</div>
            <div className="div59">5</div>
          </div>
        </div>
      </div>
      <div className="frame-parent76">
        <div className="selected-parent3">
          <div className="div59">0 selected</div>
          <div className="reset6">Reset</div>
        </div>
        <div className="frame-parent67">
          <div className="rectangle-group">
            <div className="frame-child81" />
          </div>
          <div className="samsung-group">
            <div className="apple5">Apple</div>
            <div className="div59">5</div>
          </div>
        </div>
      </div>
      <div className="frame-parent78">
        <div className="selected-parent3">
          <div className="div59">0 selected</div>
          <div className="reset6">Reset</div>
        </div>
        <div className="frame-wrapper2">
          <div className="frame-wrapper2">
            <div className="ellipse-parent3">
              <div className="frame-child94" />
              <div className="frame-child95" />
              <div className="frame-child96" />
              <div className="frame-child97" />
              <div className="frame-child98" />
              <div className="frame-child99" />
              <div className="frame-child100" />
              <div className="frame-child101" />
              <div className="frame-child102" />
            </div>
          </div>
        </div>
      </div>
      <div className="brands-group">
        <div className="brands3">Brands</div>
        <div className="reset6">Reset</div>
      </div>
      <div className="avaliability-container">
        <div className="brands3">Avaliability</div>
      </div>
      <div className="product-type-container">
        <div className="brands3">Product type</div>
      </div>
      <div className="brand-container">
        <div className="brands3">Brand</div>
      </div>
      <div className="storage1">Storage</div>
      <div className="color-container">
        <div className="brands3">Color</div>
      </div>
      <div className="user-apple-child2" />
      <div className="user-apple-child3" />
      <div className="user-apple-child4" />
      <div className="user-apple-child5" />
      <div className="user-apple-child6" />
      <div className="user-apple-child7" />
      <div className="frame-parent79">
        <div className="frame14" />
        <img className="group-child4" alt="" src="/rectangle-3@2x.png" />
        <div className="frame15">
          <div className="empowering-your-mobile2">
            Empowering Your Mobile Lifestyle
          </div>
        </div>
        <div className="frame16">
          <b className="b2">+(00)-000-000-0000</b>
        </div>
        <div className="frame17">
          <div className="frame-parent80">
            <div className="home-our-pricing-container">
              <b className="home11" onClick={onHomeClick}>
                Home
              </b>
              <b className="home12">About Us</b>
              <b className="home12">shop</b>
              <b className="home12">Collection</b>
              <b className="home12">Page</b>
            </div>
            <div className="group-parent1">
              <img className="frame-child103" alt="" src="/group-491.svg" />
              <img className="frame-child103" alt="" src="/group-22.svg" />
              <img className="frame-child103" alt="" src="/group-11.svg" />
              <img className="frame-child103" alt="" src="/group-32.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserApple;

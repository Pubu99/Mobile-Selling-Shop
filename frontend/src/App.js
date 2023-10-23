import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AdminApple from "./pages/AdminApple";
import UserApple from "./pages/UserApple";
import UpdateProduct from "./pages/UpdateProduct";
import AddProduct from "./pages/AddProduct";
import AdminSignUp from "./pages/AdminSignUp";
import AdminLogin from "./pages/AdminLogin";
import UpdatePost from "./pages/updatePost";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admin-apple":
        title = "";
        metaDescription = "";
        break;
      case "/user-apple":
        title = "";
        metaDescription = "";
        break;
      case "/update-product":
        title = "";
        metaDescription = "";
        break;
      case "/add-product":
        title = "";
        metaDescription = "";
        break;
      case "/user-log-in":
        title = "";
        metaDescription = "";
        break;
      case "/admin-login":
        title = "";
        metaDescription = "";
        break;
      case "/update-post":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-apple" element={<AdminApple />} />
      <Route path="/user-apple" element={<UserApple />} />
      <Route path="/update-product" element={<UpdateProduct />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/user-log-in" element={<AdminSignUp />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/update-post/:id" element={<UpdatePost/>} />
    </Routes>
  );
}
export default App;

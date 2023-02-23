import { Route, Routes } from "react-router-dom";
import AdminPage from "../Admin/pages/AdminPage";
import Login from "../components/LoginPage/LoginPage";
import OTP from "../components/LoginPage/OTP";
import Signup from "../components/SignupPage/signup";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";

export default function AllRoutes(){


    return <Routes>

        <Route path="/" element={<Homepage />}></Route>

        <Route path="/products" element={<ProductPage/>}></Route>

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login/otp" element={<OTP />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>


    </Routes>
}
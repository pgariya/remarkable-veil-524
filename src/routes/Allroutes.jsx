import { Route, Routes } from "react-router-dom";
import Login from "../components/LoginPage/LoginPage";
import OTP from "../components/LoginPage/OTP";
import Signup from "../components/SignupPage/signup";
import Homepage from "../pages/Homepage";

export default function AllRoutes(){


    return <Routes>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login/otp" element={<OTP />}></Route>

    </Routes>
}
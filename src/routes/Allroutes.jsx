import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";

export default function AllRoutes(){


    return <Routes>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products" element={<ProductPage/>}></Route>

    </Routes>
}
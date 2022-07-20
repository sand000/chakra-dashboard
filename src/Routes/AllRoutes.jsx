import {Route, Routes} from "react-router-dom"
import Home from "./HomePage";
export default function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
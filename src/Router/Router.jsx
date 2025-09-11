import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainlayOut/MainLayOut";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])
export default router;

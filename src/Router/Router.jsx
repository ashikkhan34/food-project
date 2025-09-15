import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainlayOut/MainLayOut";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'shop',
                element:<Shop></Shop>
            }
        ]
    }
])
export default router;

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewVideoPage from "../pages/NewVideoPage";
import NotFoundPage from "../pages/NotFoundPage";

const routes=createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,
    },
    {
        path:"/new-video",
        element:<NewVideoPage/>,
    },
    {
        path:"*",
        element:<NotFoundPage/>,
    },
]);

export default routes;
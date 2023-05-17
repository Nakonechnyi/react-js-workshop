import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../components/NotFound/NotFound";
import PostDashboard from "../components/PostDashboard/PostDashboard";
import PostForm from "../components/PostForm/PostForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PostDashboard/>,
        errorElement: <NotFound/>
    },
    {
        path: "/post/create",
        element: <PostForm/>,
        errorElement: <NotFound/>
    },
    {
        path: "/post/update/:postId",
        element: <PostForm/>,
        errorElement: <NotFound/>
    }
]);

export default router;
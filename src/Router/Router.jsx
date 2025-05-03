import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import PrivateRoute from "../Provider/privateRoute";
// import CategoryNews from "../Pages/CategoryNews/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                    hydrateFallbackElement: <p>lodding .....</p>,
                }
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                }
            ]
        },
        {
            path: "/news-details/:id",
            element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <p>lodding .....</p>,
        },
        {
            path: "/*",
            element: <h2>Error404</h2>
        }
    ]
);

export default router;
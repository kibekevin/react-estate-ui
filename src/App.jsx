import Homepage from "./routes/homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listpage/ListPage";
import { RequireAuth, Layout } from "./routes/layout/Layout";
import AboutPage from "./routes/aboutPage/AboutPage";
import SinglePage from "./routes/singlePage/SinglePage";
import LoginPage from "./routes/loginPage/LoginPage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import RegisterUserPage from "./routes/registerUserPage/RegisterUserPage";
import UpdateProfilePage from "./routes/updateProfilePage/UpdateProfilePage";

function App() {

    const router = createBrowserRouter(
        [
            {
                path:"/",
                element: <Layout/>,
                children: [
                    {
                        path: "/",
                        element: <Homepage/>
                    },
                    {
                        path: "/list",
                        element: <ListPage/>
                    },
                    {
                        path: "/about",
                        element: <AboutPage/>
                    },
                    {
                        path: "/:id",
                        element: <SinglePage/>
                    },
                    {
                        path: "/login",
                        element: <LoginPage/>
                    },
                    {
                        path: "/register",
                        element: <RegisterUserPage/>
                    },
                ]
            },

            {
                path:"/",
                element: <RequireAuth/>,
                children: [
                    {
                        path: "/profile",
                        element: <ProfilePage/>
                    },
                    {
                        path: "/profile/update",
                        element: <UpdateProfilePage/>
                    }
                ]
            }

        ]
    )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home'
import Categories from '../Components/Categories/Categories';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Log/Login'
import Register from '../Pages/Log/Register'
import NewsDetails from '../Pages/NewsDetails/NewsDetails'
import Loading from '../Components/Loading';
import PrivateRoute from '../Layouts/PrivateRoute';

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        hydrateFallbackElement:<Loading></Loading>,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path:'/category/:id',
                Component:Categories,
                loader:()=>fetch("/news.json"),
                hydrateFallbackElement:<Loading></Loading>
            }
        ]
    },
    {
        path:'/auth',
        Component: AuthLayout,
        children:[
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path:'/auth/register',
                Component:Register
            }
        ]
    },
    {
        path:'/news-details/:id',
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement:<Loading></Loading>
    }
])

export default router;
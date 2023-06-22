import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Blog from '../pages/Blog/Blog';
import AllToys from '../pages/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';
import AddAToy from '../pages/AddAToy/AddAToy';
import PrivateRoute from './PrivateRoute';
import MyToysUpdate from '../pages/MyToys/MyToysUpdate';
import ToyDetails from '../pages/ToyDetails/ToyDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
            },
            {
                path: '/details/:id',
                element: (
                    <PrivateRoute>
                        {' '}
                        <ToyDetails></ToyDetails>{' '}
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://putul-server-flame.vercel.app/update/${params.id}`
                    ),
            },
            {
                path: '/myToys',
                element: (
                    <PrivateRoute>
                        <MyToys></MyToys>
                    </PrivateRoute>
                ),
            },
            {
                path: '/update/:id',
                element: (
                    <PrivateRoute>
                        {' '}
                        <MyToysUpdate></MyToysUpdate>{' '}
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://putul-server-flame.vercel.app/update/${params.id}`
                    ),
            },
            {
                path: '/addAToy',
                element: (
                    <PrivateRoute>
                        <AddAToy></AddAToy>
                    </PrivateRoute>
                ),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
        ],
    },
]);

export default router;

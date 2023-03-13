import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root.jsx";
import Product from "../pages/ProductPage.jsx";
import Main from "../pages/Main.jsx";
import CartModal from "../components/CartModal/CartModal.jsx";
import UserPage from "../pages/UserPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Main />,
                index: true
            },
            {
                path: '/product/:id',
                element: <Product />
            },
            {
                path: '/user',
                element: <UserPage />
            }
        ]
    }
]);

export default router;
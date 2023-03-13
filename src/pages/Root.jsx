import Header from "../components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import CartModal from "../components/CartModal/CartModal.jsx";
import {createContext, useState} from "react";

export const ModalContext = createContext(null);
export const CartContext = createContext({});

const Root = () => {

    const [modal, setModal] = useState(false);
    const toggleModal = setModal.bind(this, !modal);

    const cart = useCart([]);

    return(
        <CartContext.Provider value={cart}>
            <ModalContext.Provider value={{ modal, toggleModal }}>
                <div className="layout">
                    <Header />
                    <Outlet />
                    <Footer />

                    <CartModal />
                </div>
            </ModalContext.Provider>
        </CartContext.Provider>
    )
}

export default Root;
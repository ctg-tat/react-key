import {NavLink, useLocation} from "react-router-dom";
import {IconCart, IconUser} from "../../Icon/Icon.jsx";
import {useContext} from "react";
import {ModalContext} from "../../pages/Root.jsx";

const CartButton = () => {
    const {toggleModal} = useContext(ModalContext);

    return(
        <a onClick={toggleModal} className="onclick">
            <IconCart/>
        </a>
    )
}

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return(
        <header className={isHomePage ? '' : 'static'}>
            <div className="wrapper header">
                <div className="logo-text">
                    <NavLink to={"/"}>
                        Soft.store
                    </NavLink>
                </div>

                <nav>
                    <ul className="header-list">
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">Скидки</a></li>
                        <li><a href="#">Подписка</a></li>
                    </ul>
                </nav>

                <div className="buttons">
                    <CartButton />
                    <IconUser/>
                </div>
            </div>
        </header>
    )
}

export default Header;
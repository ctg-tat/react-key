import {useContext, useRef} from "react";
import {CartContext, ModalContext} from "../../pages/Root.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import cartTotal from "../../utils/cartTotal.js";
import formatMoney from "../../utils/formatMoney.js";

const CartModal = () => {

    const { modal, toggleModal } = useContext(ModalContext);
    const overlayRef = useRef();

    const close = (e) => {
        if(e.target === overlayRef.current){
            toggleModal();
        }
    }

    // Baket add

    const cart = useContext(CartContext);

    const total = cartTotal(cart.cartItems);

    return(
        <section className={`modal ${modal ? 'active' : ''}`} onClick={(e) => close(e)} ref={overlayRef}>
            <div className="okno">
                <div className="row">
                    <h1 className="section-title margin-bottom">
                        Корзина
                    </h1>

                    <div className="overflow">
                        <div className="basket-items">
                            {
                                cart.cartItems.map((item) => {
                                    return(
                                        <CartItem key={item.id} item={item}/>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

                <div className="ordered">
                    <div className="order-summa">
                        <div className="order-summa_name">
                            Итоговая цена:
                        </div>

                        <div className="order-summa_price">
                            {formatMoney(total)} ₽
                        </div>
                    </div>

                    <a href="#" className="button">Оформить заказ</a>
                </div>
            </div>
        </section>
    )
}

export default CartModal;
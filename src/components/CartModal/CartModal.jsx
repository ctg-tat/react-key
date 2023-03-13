import {useContext, useRef} from "react";
import {ModalContext} from "../../pages/Root.jsx";

const CartModal = () => {

    const { modal, toggleModal } = useContext(ModalContext);
    const overlayRef = useRef();

    const close = (e) => {
        if(e.target === overlayRef.current){
            toggleModal();
        }
    }

    return(
        <section className={`modal ${modal ? 'active' : ''}`} onClick={(e) => close(e)} ref={overlayRef}>
            <div className="okno">
                <div className="row">
                    <h1 className="section-title margin-bottom">
                        Корзина
                    </h1>

                    <div className="overflow">
                        <div className="basket-items">
                            <div className="basket-item">
                                <div className="column">
                                    <img className="basket-img" src="src/assets/images/product.png" alt=""/>
                                </div>
                                <div className="column">
                                    <div className="button-close">
                                        <img src="src/assets/images/delete.png" alt=""/>
                                    </div>

                                    <p className="basket-item_name">
                                        Купить Microsoft Office 2019 Professional...
                                    </p>

                                    <div className="basket-price">
                                        <p className="price">
                                            1 190 ₽
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="basket-item">
                                <div className="column">
                                    <img className="basket-img" src="src/assets/images/product.png" alt=""/>
                                </div>
                                <div className="column">
                                    <div className="button-close">
                                        <img src="src/assets/images/delete.png" alt=""/>
                                    </div>

                                    <p className="basket-item_name">
                                        Купить Microsoft Office 2019 Professional...
                                    </p>

                                    <div className="basket-price">
                                        <p className="price">
                                            1 190 ₽
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="basket-item">
                                <div className="column">
                                    <img className="basket-img" src="src/assets/images/product.png" alt=""/>
                                </div>
                                <div className="column">
                                    <div className="button-close">
                                        <img src="src/assets/images/delete.png" alt=""/>
                                    </div>

                                    <p className="basket-item_name">
                                        Купить Microsoft Office 2019 Professional...
                                    </p>

                                    <div className="basket-price">
                                        <p className="price">
                                            1 190 ₽
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="basket-item">
                                <div className="column">
                                    <img className="basket-img" src="src/assets/images/product.png" alt=""/>
                                </div>
                                <div className="column">
                                    <div className="button-close">
                                        <img src="src/assets/images/delete.png" alt=""/>
                                    </div>

                                    <p className="basket-item_name">
                                        Купить Microsoft Office 2019 Professional...
                                    </p>

                                    <div className="basket-price">
                                        <p className="price">
                                            1 190 ₽
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="basket-item">
                                <div className="column">
                                    <img className="basket-img" src="src/assets/images/product.png" alt=""/>
                                </div>
                                <div className="column">
                                    <div className="button-close">
                                        <img src="src/assets/images/delete.png" alt=""/>
                                    </div>

                                    <p className="basket-item_name">
                                        Купить Microsoft Office 2019 Professional...
                                    </p>

                                    <div className="basket-price">
                                        <p className="price">
                                            1 190 ₽
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ordered">
                    <div className="order-summa">
                        <div className="order-summa_name">
                            Итоговая цена:
                        </div>

                        <div className="order-summa_price">
                            1 190 ₽
                        </div>
                    </div>

                    <a href="#" className="button">Оформить заказ</a>
                </div>
            </div>
        </section>
    )
}

export default CartModal;
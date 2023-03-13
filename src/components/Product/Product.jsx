import {NavLink} from "react-router-dom";
import {IconCart} from "../../Icon/Icon.jsx";
import {useContext} from "react";
import {CartContext} from "../../pages/Root.jsx";
import formatMoney from "../../utils/formatMoney.js";

const Product = ({product}) => {

    const {addToCart} = useContext(CartContext);

    return(
        <div className="product">
            <div className="product-content">
                <div className="sale">
                </div>

                <div className="info">
                    <div className="price">
                        <p className="price-name">
                            Цена:
                        </p>

                        <p className="price-value">
                            {formatMoney(product.price)} ₽
                        </p>
                    </div>

                    <div className="buttons">
                        <NavLink to={`/product/${product.id}`} className="button">
                            Подробнее
                        </NavLink>

                        <button className="button-cart" onClick={addToCart.bind(this, product)}>
                            <IconCart/>
                        </button>
                    </div>
                </div>
            </div>

            <img src={product.img} alt=""/>
        </div>
    )
}

export default Product;
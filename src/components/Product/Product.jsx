import {NavLink} from "react-router-dom";
import {IconCart} from "../../Icon/Icon.jsx";

const Product = ({product}) => {
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
                            {product.price} ₽
                        </p>
                    </div>

                    <div className="buttons">
                        <NavLink to={`/product/${product.id}`} className="button">
                            Подробнее
                        </NavLink>

                        <a href="src/components/Main#" className="button-cart">
                            <IconCart/>
                        </a>
                    </div>
                </div>
            </div>

            <img src={product.img} alt=""/>
        </div>
    )
}

export default Product;
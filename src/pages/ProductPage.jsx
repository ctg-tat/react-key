import {IconCart} from "../Icon/Icon.jsx";
import {useParams} from "react-router-dom";
import PRODUCTS from "../Data/PRODUCTS.js";
import {useContext} from "react";
import {CartContext} from "./Root.jsx";

const ProductPage = () => {

    const {id} = useParams();

    const product = PRODUCTS.find((p) => p.id === parseInt(id));

    const { addToCart } = useContext(CartContext);

    return (
        <div className="margin product-page wrapper">
            <div className="column">
                <img src={product.img} alt=""/>

                <div className="sale-product">
                    <div className="sale-value">
                        -{product.sale}%
                    </div>

                    <div className="prices">
                        <p className="old-price">
                            {product.price} ₽
                        </p>

                        <p className="price-value">
                            {product.price - product.price*(product.sale / 100)} ₽
                        </p>
                    </div>
                </div>

                <div className="info">
                    <div className="buttons">
                        <button onClick={addToCart.bind(this, product)} className="button-cart">
                            <IconCart/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="column column-right">
                <p className="item-name">{product.name}</p>

                <div className="characteristics">
                    <div className="characteristic">
                        <div className="characteristic-name">
                            Лицензия:
                        </div>

                        <div className="characteristic-value">
                            {product.license}
                        </div>
                    </div>

                    <div className="characteristic">
                        <div className="characteristic-name">
                            Устройство:
                        </div>

                        <div className="characteristic-value">
                            {product.device}
                        </div>
                    </div>

                    <div className="characteristic">
                        <div className="characteristic-name">
                            Разрядность:
                        </div>

                        <div className="characteristic-value">
                            {product.bit_depth}
                        </div>
                    </div>

                    <div className="characteristic">
                        <div className="characteristic-name">
                            Язык:
                        </div>

                        <div className="characteristic-value">
                            {product.lang}
                        </div>
                    </div>
                </div>

                <p className="description">
                    {product.text}
                </p>
            </div>
        </div>
    )
}

export default ProductPage;
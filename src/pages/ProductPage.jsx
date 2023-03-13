import {IconCart} from "../Icon/Icon.jsx";
import {useParams} from "react-router-dom";
import PRODUCTS from "../Data/PRODUCTS.js";

const ProductPage = () => {

    const productId = useParams().id;

    const product = PRODUCTS.find((product, index) => {

        if(product.id.toString() === productId){
            return product;
        }
    });

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
                        <a href="src/components/Main#" className="button-cart">
                            <IconCart/>
                        </a>
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
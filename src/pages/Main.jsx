import {IconCart} from "../Icon/Icon.jsx";
import PRODUCTS from "../Data/PRODUCTS.js";
import Product from "../components/Product/Product.jsx";
import {useState} from "react";
import Slider from "../components/Slider/Slider.jsx";

import saleImg from "../../src/assets/images/product.png";

const Main = () => {

    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState("");

    const filteredProduct = products.filter((item) => item.name.toLocaleLowerCase().includes(query));

    const onChangeQuery = (e) => setQuery(e.target.value.toLocaleLowerCase());

    return (
        <main>
            <section className="banner">
                <div className="wrapper">
                    <Slider />
                </div>
            </section>

            <section className="margin" id="catalog">
                <div className="wrapper">
                    <h1 className="section-title">
                        Каталог
                    </h1>

                    <form className="search-form" method="post">
                        <input value={query} onChange={(e) => onChangeQuery(e)} type="search" name="search"
                               placeholder="Поиск..."/>
                    </form>

                    <div className="products">
                        {
                            filteredProduct.length ? (filteredProduct.map((product) => {
                                    return <Product key={product.id}
                                                    product={product}/>
                                }))
                                :
                                <div className="empty">Такого товара нет!</div>
                        }
                    </div>
                </div>
            </section>

            <section className="margin" id="sale">
                <div className="wrapper">
                    <h1 className="section-title margin-bottom">
                        Скидки
                    </h1>

                    <div className="products">
                        <div className="product">
                            <div className="product-content">
                                <div className="sale">
                                    <div className="sale-value">
                                        -30%
                                    </div>
                                </div>

                                <div className="info">
                                    <div className="price">
                                        <p className="price-name">
                                            Цена:
                                        </p>

                                        <p className="price-value">
                                            1 190 ₽
                                        </p>
                                    </div>

                                    <div className="buttons">
                                        <a href="src/components/Main#" className="button">
                                            Подробнее
                                        </a>

                                        <a href="src/components/Main#" className="button-cart">
                                            <IconCart/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <img src={saleImg} alt=""/>
                        </div>

                        <div className="product">
                            <div className="product-content">
                                <div className="sale">
                                    <div className="sale-value">
                                        -30%
                                    </div>
                                </div>

                                <div className="info">
                                    <div className="price">
                                        <p className="price-name">
                                            Цена:
                                        </p>

                                        <p className="price-value">
                                            1 190 ₽
                                        </p>
                                    </div>

                                    <div className="buttons">
                                        <a href="src/components/Main#" className="button">
                                            Подробнее
                                        </a>

                                        <a href="src/components/Main#" className="button-cart">
                                            <IconCart/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <img src={saleImg} alt=""/>
                        </div>

                        <div className="product">
                            <div className="product-content">
                                <div className="sale">
                                    <div className="sale-value">
                                        -30%
                                    </div>
                                </div>

                                <div className="info">
                                    <div className="price">
                                        <p className="price-name">
                                            Цена:
                                        </p>

                                        <p className="price-value">
                                            1 190 ₽
                                        </p>
                                    </div>

                                    <div className="buttons">
                                        <a href="src/components/Main#" className="button">
                                            Подробнее
                                        </a>

                                        <a href="src/components/Main#" className="button-cart">
                                            <IconCart/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <img src={saleImg} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="margin" id="mailing">
                <div className="wrapper">
                    <h1 className="section-title">
                        Подключайся
                    </h1>

                    <p className="mailing-text">
                        Получай самые интересные предложения первым!
                    </p>

                    <form className="mailing-form">
                        <input type="text" placeholder="Email"/>

                        <button type="submit" className="button">Отправить</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Main;
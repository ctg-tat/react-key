import PRODUCTS from "../../Data/PRODUCTS.js";
import {useState} from "react";
import SliderItem from "./SliderItem/SliderItem.jsx";

import prevImg from "../../assets/images/left.png";
import nextImg from "../../assets/images/right.png";

const Slider = () => {

    const [items, setItems] = useState(PRODUCTS);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1);
    const prev = setCurrentIndex.bind(this, currentIndex <= 0 ? items.length - 1 : currentIndex - 1);


    return(
        <div className="slider">
            {
                <SliderItem product={items[currentIndex]}/>
            }

            <div className="arrows">
                <div className="wrapper">
                    {
                        currentIndex <= 0 || (
                            <div onClick={prev} className="arrow-left">
                                <img src={prevImg} alt=""/>
                            </div>
                        )
                    }

                    {
                        currentIndex >= items.length - 1 || (
                            <div onClick={next} className="arrow-right">
                                <img src={nextImg} alt=""/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Slider;
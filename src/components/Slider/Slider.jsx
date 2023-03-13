import PRODUCTS from "../../Data/PRODUCTS.js";
import {useState} from "react";
import SliderItem from "./SliderItem/SliderItem.jsx";

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
                                <img src="src/assets/images/left.png" alt=""/>
                            </div>
                        )
                    }

                    {
                        currentIndex >= items.length - 1 || (
                            <div onClick={next} className="arrow-right">
                                <img src="src/assets/images/right.png" alt=""/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Slider;
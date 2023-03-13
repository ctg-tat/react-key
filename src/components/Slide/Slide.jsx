import {useState} from "react";

const Slide = ({product}) => {

    const [items, setItems] = useState();

    return(
        <div className="slide">
            <div className="wrapper2">
                <div className="banner-content">
                    <h1 className="slide-title">
                        {product.name}
                    </h1>

                    <div className="overtext">Home</div>

                    <p className="slide-text">
                        {product.text}
                    </p>
                </div>
            </div>

            <img src={product.imgBig} alt=""/>
        </div>
    )
}

export default Slide;
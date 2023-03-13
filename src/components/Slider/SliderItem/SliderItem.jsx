const SliderItem = ({product}) => {
    return(
        <div className="slide">
            <div className="wrapper2">
                <div className="banner-content">
                    <h1 className="slide-title">
                        {product.name}
                    </h1>

                    <div className="overtext">Home</div>

                    <p className="slide-text">
                        {product.text.substring(0, 200)}...
                    </p>
                </div>
            </div>

            <img src={product.imgBig} alt=""/>
        </div>
    )
}

export default SliderItem;
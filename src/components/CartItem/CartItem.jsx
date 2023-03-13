import {useContext} from "react";
import {CartContext} from "../../pages/Root.jsx";
import formatMoney from "../../utils/formatMoney.js";

import removeIcon from '../../assets/images/delete.png';

const CartItem = ({item}) => {

    const {removeCartItemById} = useContext(CartContext);

    return(
        <div className="basket-item">
            <div className="column">
                <img className="basket-img" src={item.img} alt=""/>
            </div>
            <div className="column">
                <div className="button-close" onClick={removeCartItemById.bind(this, item.id)}>
                    <img src={removeIcon} alt=""/>
                </div>

                <p className="basket-item_name">
                    {item.name}
                </p>

                <div className="basket-price">
                    <p className="price">
                        {formatMoney(item.price)} ₽
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
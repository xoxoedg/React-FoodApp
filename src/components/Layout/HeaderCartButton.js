import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
    const context = useContext(CartContext);
    const numberOfCartItems = context.items;

    return (
        <button className={classes.button} onClick={props.onClick}><span className={classes.icon}>
            <CartIcon/>
        </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default HeaderCartButton;
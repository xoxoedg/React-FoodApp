import classes from "./Cart.module.css"

function Cart(props) {

    const cartItems = <ul className={"cart-items"}>{[{id:"c1", name: "sushi", amount:2, price: 12.99}].map(item => <li></li>)}</ul>;

    return (
        <div>
            {cartItems}
        <div className={classes.total}>
            <span>Total Amoun</span>
            <span>35</span>
        </div>
        <div className={classes.actions}>
            <button className={classes["button--alt"]}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
        </div>
    )
}

export default Cart;
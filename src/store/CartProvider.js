import CartContext from "./cart-context";

function CartProvider(props) {
    function addItem(item) {

    }

    function removeItem(item) {

    }

    const cartContext = {
        items: [],
        totalAmount:0,
        addItem: addItem,
        removeItem: removeItem
    }


    return (
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
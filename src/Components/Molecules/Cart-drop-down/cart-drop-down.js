import jsonFile from 'src/db.json';
import './cart-drop-down.scss'

const CartDropDown = () => {
    const cart = jsonFile.cart;

    return (
        <div className="cart">
            {
                cart.map((post,index) => {
                    return (
                        <div className="cart__item" key={index}>
                            <p className="cart__text">
                                {post.item}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartDropDown;
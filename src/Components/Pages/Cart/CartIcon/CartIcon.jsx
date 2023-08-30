import { CartIconStyle } from "./CartIcon.style."
import { Link } from "react-router-dom"
import { useCartData } from "../../../App/Providers/CartProvider"

const CartIcon = () => {
  const { cartItems } = useCartData()

  return (
    <CartIconStyle>
      <Link to="/cart">Du har {cartItems.length} varer i kurven</Link>
      <Link to="/cart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.25"
        height="15.75"
        viewBox="0 0 20.25 15.75"
      >
        <path
          id="Icon_awesome-shopping-basket"
          data-name="Icon awesome-shopping-basket"
          d="M20.25,8.719v.563a.844.844,0,0,1-.844.844h-.281l-.918,6.426A1.687,1.687,0,0,1,16.536,18H3.714a1.688,1.688,0,0,1-1.671-1.449l-.918-6.426H.844A.844.844,0,0,1,0,9.281V8.719a.844.844,0,0,1,.844-.844H3.211L6.965,2.713a1.125,1.125,0,0,1,1.82,1.323L5.993,7.875h8.263L11.465,4.037a1.125,1.125,0,0,1,1.82-1.323l3.754,5.162h2.367A.844.844,0,0,1,20.25,8.719Zm-9.281,6.188V10.969a.844.844,0,0,0-1.688,0v3.938a.844.844,0,1,0,1.688,0Zm3.938,0V10.969a.844.844,0,0,0-1.687,0v3.938a.844.844,0,0,0,1.688,0Zm-7.875,0V10.969a.844.844,0,0,0-1.688,0v3.938a.844.844,0,0,0,1.688,0Z"
          transform="translate(0 -2.25)"
        />
      </svg>
      </Link>
    </CartIconStyle>
  )
}

export default CartIcon

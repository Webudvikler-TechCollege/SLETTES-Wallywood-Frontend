import axios from "axios"
import { useAuth } from "../../../App/Auth/Auth"
import { useCartData } from "../../../App/Providers/CartProvider"
import { ButtonStyle } from "./AddToCartButton.style"

const AddToCartButton = (props) => {
  const { loginData } = useAuth()
  const { cartItems, setCartItems } = useCartData()

  const submitToCart = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      },
    }

    const formData = new URLSearchParams()
    formData.append("poster_id", props.id)
    formData.append("quantity", 1)
    const endpoint = "http://localhost:4000/cart"
    const result = await axios.post(endpoint, formData, options)
    if(result.data) {
      const cart = await axios.get(endpoint, options)
      setCartItems(cart.data)
    }
  }

  return cartItems.find(x => x.poster.id === props.id) ? 
    <>Dette produkt ligger i kurven</> :
    <ButtonStyle onClick={submitToCart}>{props.children}</ButtonStyle>
}

export default AddToCartButton

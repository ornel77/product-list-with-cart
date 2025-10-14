import CartEmpty from "./CartEmpty"


const Cart = () => {
  return (
    <div className="bg-white w-full">
      <h2>
        Your cart
      </h2>
      <CartEmpty />
    </div>
  )
}

export default Cart
import CartEmpty from "./CartEmpty"


const Cart = () => {
  return (
    <div className="bg-white w-full lg:w-[384px]">
      <h2>
        Your cart (0)
      </h2>
      <CartEmpty />
    </div>
  )
}

export default Cart
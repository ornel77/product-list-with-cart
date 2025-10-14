import CartEmpty from "./CartEmpty"
import CartList from "./CartList"


const Cart = () => {
  return (
    <div className="bg-white lg:w-[384px] w-full justify-self-end p-6 rounded-xl">
      <h2 className="text-red font-bold text-2xl mb-6">
        Your Cart (0)
      </h2>
      
      {/* <CartEmpty /> */}
      <CartList />
    </div>
  )
}

export default Cart
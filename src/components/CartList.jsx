import CartItem from "./CartItem"


const CartList = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <section className="total flex justify-between items-center py-4">
        <p>Order Total</p>
        <p className="text-2xl font-bold">$46.50</p>
      </section>

      <section className="certif flex justify-center gap-2 bg-pink-50 p-4">
        <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
        <p className="text-sm">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
      </section>

      <button className="px-6 py-4 text-center w-full bg-red text-pink-50 rounded-full">
        Confirm Order
      </button>
    </div>
  )
}

export default CartList
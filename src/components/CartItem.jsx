

const CartItem = () => {
  return (
    <article className="py-4 border-b border-b-pink-100">
      <section className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold">Classic Tiramisu</p>
          <p className="flex gap-4 text-sm">
            <span className="font-semibold text-red">1x</span>
            <span className="text-pink-500">@ $5.00</span>
            <span className="text-pink-500 font-semibold">$5.00</span>
          </p>
        </div>
        <button className="border border-pink-400 rounded-full p-0.5">
          <img src="/assets/images/icon-remove-item.svg" alt="" className="w-3.5 h-3.5 " />
        </button>
      </section>
    </article>
  )
}

export default CartItem
import { useState } from "react";

const DessertCard = ({ dessert, cartList }) => {
  const [qty, setQty] = useState(0);
  return (
    <article>
      <div className="relative mb-7">
        <picture>
          <source media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
          <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />
          <img src={dessert.image.mobile} alt="" className="rounded-[8px]" />
        </picture>
        <div className="absolute z-10 left-1/2 -translate-x-1/2 -bottom-5 max-w-[160px] w-full">
          {qty > 0 ? (
            <div className="z-10 rounded-full bg-red flex justify-between items-center gap-1.5 w-full p-3">
              <button
                className="border border-white w-4 h-4 flex justify-center items-center p-0.5 rounded-full cursor-pointer "
                onClick={() => setQty(Math.max(0, qty - 1))}
              >
                <img
                  src="/assets/images/icon-decrement-quantity.svg"
                  alt=""
                  className=""
                />
              </button>

              <input
                type="number"
                className="input-number appearance-none block  max-w-8 text-center"
                value={quantitiesList}
                onChange={(e) => setQty(e.target.value)}
              />
              <button
                className="border border-white w-4 h-4 flex justify-center items-center p-0.5 rounded-full cursor-pointer"
                onClick={() => setQty(prev => prev + 1)}
              >
                <img
                  src="/assets/images/icon-increment-quantity.svg"
                  alt=""
                  className=""
                />
              </button>
            </div>
          ) : (
            <button
              className="flex justify-center gap-1.5 text-sm font-semibold bg-white rounded-full border border-pink-400 p-3 cursor-pointer w-full "
              onClick={() => setQty(1)}
            >
              {/* Add to Cart */}
              <img src="/assets/images/icon-add-to-cart.svg" alt="" />
              <p>Add to cart</p>
            </button>
          )}
        </div>
      </div>
      <section>
        <p className="text-pink-500 text-sm"> {dessert.category} </p>
        <p className="text-pink-900 font-semibold"> {dessert.name} </p>
        <p className="text-red font-semibold"> ${dessert.price} </p>
      </section>
    </article>
  );
};

export default DessertCard;

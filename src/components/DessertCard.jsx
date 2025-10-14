const DessertCard = ({ dessert }) => {
  return (
    <article>
      <div className="relative mb-7">
        <picture >
          <source media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
          <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />
          <img src={dessert.image.mobile} alt="" className="rounded-[8px]" />
        </picture>
        <div className="absolute z-10 left-1/2 -translate-x-1/2 -bottom-5 max-w-[160px] w-full">
          <button className="flex justify-center gap-1.5 text-sm font-semibold bg-white rounded-full border border-pink-400 p-3 cursor-pointer w-full ">
            {/* Add to Cart */}
            <img src="/assets/images/icon-add-to-cart.svg" alt="" />
            <p>Add to cart</p>
          </button>
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

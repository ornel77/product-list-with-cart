import DessertList from "./components/DessertList";
import Cart from "./components/Cart";
import { useState } from "react";

const App = () => {
  const [cartList, setCartList] = useState([1])
  return (
    
    <div className="bg-pink-50 p-5 h-full ">
      <div className="font-redhat mx-auto md:pt-8  text-pink-900 md:max-w-[700px] lg:max-w-[1250px]  w-full">
        <div className="lg:flex lg:items-baseline lg:gap-8">
          <DessertList cartList={cartList} />
          <Cart cartList={cartList} />
        </div>
      </div>
    </div>
  );
};

export default App;

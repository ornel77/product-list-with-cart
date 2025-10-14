import DessertList from "./components/DessertList";
import Cart from "./components/Cart";

const App = () => {
  return (
    
    <div className="bg-pink-50 p-5 h-full ">
      <div className="font-redhat mx-auto md:pt-8  text-pink-900 md:max-w-[700px] lg:max-w-[1300px]  w-full">
        <div className="lg:flex lg:items-baseline lg:gap-8">
          <DessertList />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;

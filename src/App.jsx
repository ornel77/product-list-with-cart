import DessertList from "./components/DessertList";
import Cart from "./components/Cart";

const App = () => {
  return (
    
    <div className="bg-pink-50 p-5 h-screen">
      <div className="font-redhat mx-auto md:pt-8  text-pink-900 md:max-w-[700px] lg:max-w-[1200px]  w-full">
        <div className="lg:flex md:justify-center lg:gap-8">
          <DessertList />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;

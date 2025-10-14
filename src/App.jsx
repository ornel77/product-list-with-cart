import DessertList from "./components/DessertList";
import Cart from "./components/Cart";

const App = () => {
  return (
    
    <div className="bg-pink-100 p-5">
      <div className="font-redhat mx-auto md:pt-8  text-pink-900 md:max-w-[700px] lg:max-w-[1000px] w-full">
        <div className="md:flex md:justify-center">
          <DessertList />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;

import desserts from "../utils/data.json";
import DessertItem from "./DessertItem";

const DessertList = ({cartList}) => {
  return (
    <div className="flex-1 mb-6">
      <h1 className="text-4xl font-black mb-8">Desserts</h1>

      <div className="grid md:grid-cols-3 gap-x-6 gap-y-8">
        {desserts.map((dessert) => (
          <DessertItem dessert={dessert} cartList={cartList} />
        ))}
      </div>
    </div>
  );
};

export default DessertList;

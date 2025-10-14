import desserts from "../utils/data.json";
import DessertCard from "./DessertCard";

const DessertList = () => {
  return (
    <div className="flex-1">
      <h1 className="text-4xl font-black mb-8">Desserts</h1>

      <div className="grid md:grid-cols-3 gap-x-6 gap-y-8">
        {desserts.map((dessert) => (
          <DessertCard dessert={dessert} />
        ))}
      </div>
    </div>
  );
};

export default DessertList;

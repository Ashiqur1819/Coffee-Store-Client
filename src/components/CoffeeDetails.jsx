import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {

    const coffee = useLoaderData()
    const {name, quantity, supplier, taste, category, details, photo } = coffee;

    return (
      <div className="border mt-12 max-w-2xl mx-auto p-6 rounded-md">
        <div className="flex items-center justify-center gap-12">
          <div>
            <img src={photo} alt="" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-lg font-semibold">Category: {category}</p>
            <p className="text-gray-600">Description: {details}</p>
            <p className="font-medium">Supplier: {supplier}</p>
            <p className="text-teal-500">Quantity: {quantity}</p>
            <p className="text-gray-600">Taste: {taste}</p>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <button className="bg-teal-500 px-6 py-2 rounded-lg text-white font-medium mt-3 text-cente">
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    );
};

export default CoffeeDetails;
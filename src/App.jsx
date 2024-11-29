import { useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar";
import Coffee from "./components/Coffee";
import { useState } from "react";


const App = () => {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="flex items-center justify-center mt-24 px-6 md:px-12">
      <div>
        <div>
          <h2 className="text-center text-5xl font-bold">Coffee Store</h2>
          <div className="flex items-center justify-center">
            <Navbar></Navbar>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {coffees.map((coffee) => (
            <Coffee coffees={coffees} setCoffees={setCoffees} coffee={coffee} key={coffee._id}></Coffee>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
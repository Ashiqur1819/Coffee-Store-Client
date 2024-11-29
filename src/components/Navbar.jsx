import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <div>
        <div className="mt-6 flex items-center gap-6">
          <button className="px-6 py-2 rounded-md bg-orange-400 text-white font-medium">
            <Link to="/">Home</Link>
          </button>
          <button className="px-6 py-2 rounded-md bg-orange-400 text-white font-medium">
            <Link to="/add_coffee">Add Coffee</Link>
          </button>
        </div>
      </div>
    );
};

export default Navbar;
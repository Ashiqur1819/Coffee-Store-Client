import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {


        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });

          
      }
    });
  };

  return (
    <div>
      <div className="card lg:card-side h-60 bg-base-100 shadow-xl p-6 mt-6 border gap-8 r">
        <figure className="w-full">
          <img src={photo} className="w-full h-44 rounded-2xl" alt="Album" />
        </figure>
        <div className="space-y-2 flex flex-col justify-center">
          <h2 className="card-title">{name}</h2>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
          <p>
            <strong>Description:</strong> {details}
          </p>
        </div>
        <div className="card-actions justify-center flex-col">
          <button className="btn text-lg bg-yellow-900 text-white hover:bg-yellow-800">
            <Link to={`/coffee_details/${_id}`}>
              {" "}
              <FaEye />
            </Link>
          </button>
          <button className="btn text-lg bg-yellow-900 text-white hover:bg-yellow-800">
            <Link to={`/update_coffee/${_id}`}>
              <CiEdit />
            </Link>
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn text-lg bg-red-800 text-white hover:bg-yellow-800"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;

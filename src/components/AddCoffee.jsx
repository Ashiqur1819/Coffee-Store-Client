import Swal from "sweetalert2";
import Navbar from "./Navbar";

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)


        
        fetch("http://localhost:5000/coffees", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(newCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.acknowledged){
              Swal.fire({
                title: "Congratulations",
                text: "You successfully added coffee",
                icon: "success",
              });
            }
            form.reset()
          })


          
    }

    return (
      <div className=" mt-12">
        <div className="flex flex-col items-center justify-center">
          <Navbar></Navbar>
        </div>
        <div className="max-w-3xl mx-auto mt-6 bg-[#F4F3F0] p-12 rounded-md">
          <h2 className="text-center text-3xl font-bold">Add New Coffee</h2>
          <p className="text-center text-sm text-gray-600 mt-3">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form
            onSubmit={handleAddCoffee}
            className="grid grid-cols-2 items-center gap-3 mt-6"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered"
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                className="input input-bordered"
              />
            </div>
            <input
              className="btn btn-block bg-orange-400 text-white text-base font-medium col-span-2"
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    );
};

export default AddCoffee;
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-gray-300 min-h-screen p-12">
        <h1 className="text-2xl">Dashboard</h1> <br />
        <ul>
          <li className="border border-black p-4 text w-full">
            <Link to={"home"}>My Profile</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

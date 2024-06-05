import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`https://computer-shop-backend.onrender.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
console.log(userInfo);
  console.log(userInfo);
  return (
    <div>
      <div className="flex justify-between mb-7">
        <h1 className="text-3xl ">Profile Information</h1>
        <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn btn-neutral btn-md"
        >
          Edit Profile
        </Link>
      </div>
      <div>
        <img src={userInfo?.image} alt="Please update image"></img> <br />
        <h1>Name: {userInfo?.name || "Please update name"}</h1>
        <h1>Email: {userInfo?.email}</h1>
        <h1>Age: {userInfo?.age || "Please update age"}</h1>
        <h1>Mobile: {userInfo?.mobileNumber || "Please update Mobile Number"}</h1>


      </div>
    </div>
  );
};

export default Dashboard;

import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

export default function EditProfile() {
  const data = useLoaderData();
console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;

    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;

    const userData = {
      name,
      age,
      mobileNumber,
      image,
      //   email: data?.email,
    };

    fetch(
      `https://computer-shop-server-wk4t.onrender.com/user/${data?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Profile Updated Successfully");
  });
  };
  return (
    <div>
      <h1 className="text-3xl mb-7">Edit Profile </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            name="name"
            defaultValue={data?.name}
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User email</label>
          <input
            type="text"
            value={data?.email}
            disabled
            name="email"
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User Image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={data?.image}
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User Age</label>
          <input 
            type="text" 
            name="age" 
            defaultValue={data?.age}
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User Mobile</label>
          <input
            type="text"
            name="mobileNumber"
            defaultValue={data?.mobileNumber}
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <input
            type="submit"
            value="Update Profile"
            className="py-2 px-1 bg-slate-950 text-white "
          />
        </div>
      </form>
    </div>
  );
}

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ computer }) => {
  const { _id, title, brand, price, description, image_url } = computer;
  return (
    <div className="card  w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-40" src={image_url} alt="computers" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

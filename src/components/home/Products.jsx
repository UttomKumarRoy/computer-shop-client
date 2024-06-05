/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct";
import axios from 'axios';


// eslint-disable-next-line react/prop-types
const Products = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://computer-shop-server-wk4t.onrender.com/computer');
        setProducts(response.data);
        setFilteredProducts(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>
      <div className="flex gap-2 px-6 justify-center items-center text-3xl">
        <label htmlFor="search">Search: &nbsp;
      <input
        id="search"
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />  </label>
      </div>
      <br /> <br />
                                                                    
      <div className="flex gap-2 px-6 justify-center items-center ">
        {
          // eslint-disable-next-line react/prop-types
          filteredProducts.slice(0, 3).map((computer) => (
            <SingleProduct key={computer._id} computer={computer} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;

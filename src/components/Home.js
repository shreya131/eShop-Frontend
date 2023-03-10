import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import "./Styling.css";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getProduct();
  });
  const pages = { limit: 10, skip: page * 10 - 10 };
  const getProduct = async () => {
    await axios
      // .get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      // .post("http://localhost:4000/home/", pages)
      .post("https://thisisbackend.onrender.com/home/", pages)
      .then(function (response) {
        setProduct(response.data.products);
      });
  };
  return (
    <div className="Products">
      {product.length > 0 && (
        <div>
          {product.map((value, index) => {
            return (
              <ProductCard
                id={value.id}
                title={value.title}
                image={value.thumbnail}
                key={index}
              />
            );
          })}
        </div>
      )}
      <div className="pages">
        {page > 1 && (
          <button>
            <span onClick={() => setPage(page - 1)}>&#8592;</span>
          </button>
        )}
        {product.length > 0 &&
          product.slice(0, 10).map((element, index) => {
            return (
              <button>
                <span onClick={() => setPage(index + 1)} key={index}>
                  {index + 1}
                </span>
              </button>
            );
          })}
        {page < 10 && (
          <button>
            <span onClick={() => setPage(page + 1)}>&#8594;</span>
          </button>
        )}
      </div>
    </div>
  );
};
export default Home;

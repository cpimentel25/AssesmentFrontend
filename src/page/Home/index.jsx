import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import "./style.scss";

const Home = () => {
  const products = useSelector((state) => state.marketplace.data);
  // console.log(products);

  return (
    <div className='home'>
      {products.length
        ? products.map((product) => (
            <ProductCard key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))
        : null}
    </div>
  );
};

export default Home;

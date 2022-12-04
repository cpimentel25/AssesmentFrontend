import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./style.scss";

const ProductCard = (props) => {
  // eslint-disable-next-line
  const { id, title, price, image } = props;

  const newTime = Math.floor(Math.floor(Math.random() * 300000) / 60000);

  const [secs, setSecs] = useState(0);
  const [mins, setMins] = useState(newTime);

  useEffect(() => {
    const interval = setInterval(() => {
    if (secs > 0) {
      setSecs(secs - 1);
    }
    if (secs === 0){
      if (mins === 0){
        clearInterval(interval);
      } else {
        setMins(mins - 1);
        setSecs(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const handleClick = () => {
    console.log("Working!");
  };

  return (
    <div className='productcard'>
      <div className='productcard-info'>
        <p key={id} className='productcard-info_id' >Id:{id}</p>
        <p key={title} className='productcard-info_title' >Title: {title}</p>
      </div>
      <div className='productcard-image'>
        <img key={image} alt='img' className='productcard-image_img' src={image}/>
      </div>
      <div className='productcard-interactive'>
        <p className='productcard-interactive_timer'>
          {mins} : {secs}
        </p>
        <Link to={`/productdetail/${id - 1}`} >
          Details
        </Link>
        <button
          className='productcard-interactive_button'
          disabled={mins === 0 && secs === 0}
          onClick={handleClick}
          type='button'
        >
          Go to Deal
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

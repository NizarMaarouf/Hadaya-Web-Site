import React from 'react'
import Rating from './Rating';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Product(props) {
  const {product} = props;
  return (

      <div key={product._id} className="card">
        <div>
          <a href={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
          </a>
        </div>

        <div className="card-body">
          <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          <div className="price">{product.price}$</div>
        </div>
      </div>

  );
};

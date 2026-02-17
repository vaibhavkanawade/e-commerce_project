import { useContext } from "react";
import { Store } from "../context/StoreContext";
import { Link } from "react-router-dom";
import './ProductCard.css'
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(Store);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>

      <Link to={`/product/${product.id}`}>View</Link>

     <button
  onClick={() => {
    console.log("ADD CLICKED");
    addToCart(product);
  }}
>
  Add to Cart
</button>

    </div>
  );
};

export default ProductCard;

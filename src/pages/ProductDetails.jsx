import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { Store } from "../context/StoreContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(Store);

  const product = products.find((p) => p.id === Number(id));

  return (
    <div className="details">
      <img src={product.image} />
      <div>
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
        <p>{product.description}</p>
        <p>Stock: {product.stock}</p>

        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;

import { useContext, useState } from "react";
import products from "../data/products";
import ProductCard from "../compontes/ProductCard";
import { Store } from "../context/StoreContext";
import './Home.css';
const ITEMS_PER_PAGE = 6;

const Home = () => {
  const { search, category } = useContext(Store);
  const [page, setPage] = useState(1);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (!category || p.category === category)
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const shown = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div style={{ padding: 20 }}>
      {/* Products */}
      <div className="grid">
        {shown.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Pagination */}
      <div style={{ marginTop: 20 }} className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;

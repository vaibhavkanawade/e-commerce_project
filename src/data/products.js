const products = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: i % 2 === 0 ? "Electronics" : "Clothes",
  price: Math.floor(Math.random() * 5000) + 500,
  stock: Math.floor(Math.random() * 10) + 1,
  description: "This is a sample product description.",

  image: `https://picsum.photos/seed/${i + 1}/300/300`,
}));

export default products;

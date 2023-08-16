import { Link } from "react-router-dom";

const ProductsPage = () => {
  const PRODUCTS = [
    { productId: "1", title: "Product 1" },
    { productId: "2", title: "Product 2" },
    { productId: "3", title: "Product 3" },
    { productId: "4", title: "Product 4" },
  ];

  return (
    <>
      <Link to=".." relative="pathe">
        Back to home
      </Link>

      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.productId}>
            <Link to={product.productId}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;

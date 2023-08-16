import { Link, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>Your selected product with ID = {params.productId}</p>
      <p>
        <Link to="/products">Back to All Products</Link>
      </p>
    </>
  );
};

export default ProductDetailsPage;

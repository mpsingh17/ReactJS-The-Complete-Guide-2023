/**
 * createBrowserRouter function helps us to define our routes.
 * RouterProvider function tells React about the router.
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import ProductDetailsPage from "./pages/ProductsDetails";

/**
 * Define all application routes.
 * Each object inside createBrowserRouter represent an application route.
 * @returns router
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetailsPage /> },
    ],
  },
]);

function App() {
  /**
   * RouterProvider accepts the router prop to provide all available routes.
   * The "router" comes from the createBrowserRouter function call.
   */
  return <RouterProvider router={router} />;
}

export default App;

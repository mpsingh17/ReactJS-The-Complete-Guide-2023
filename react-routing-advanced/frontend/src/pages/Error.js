import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title;
  let message;

  if (error.status === 500) {
    title = "An error occured.";
    message = "Something went wrong!";
  }

  if (error.status === 404) {
    title = "Not Found.";
    message = "The page or resource not found.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;

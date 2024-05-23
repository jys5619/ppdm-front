import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h2>ERROR</h2>
        <p>
          <p>{error.data}</p>
          <p>{error.status}</p>
          <p>{error.statusText}</p>
        </p>
      </div>
    );
  } else {
    return (
      <div id="error-page">
        <p>Unknow Error</p>
      </div>
    );
  }
}

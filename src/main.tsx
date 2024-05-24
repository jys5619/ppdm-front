import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ppdmRouter } from "./app/routes/ppdm-router";

// import "@picocss/pico";

const router = createBrowserRouter(ppdmRouter);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

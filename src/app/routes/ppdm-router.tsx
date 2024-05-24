import ErrorPage from "../../pages/layout/error-page";
import Layout from "../../pages/layout/layout";
import { LoginPage } from "../../pages/auths/login/login-page";
import { Database } from "../../pages/datas/database-page";
import { MainPage } from "../../pages/main/main-page";
import { MyPage } from "../../pages/my/my-page";
import { DataPage } from "../../pages/datas/data-page";
import ProtectedRoute from "./protected-route";
import Sample from "@/pages/sample/sample";
import { UI } from "@/pages/sample";
import { CreateAccountPage } from "@/pages/auths/create-account/create-account-page";
import { UIButton, UIInput, UILink, UITable, UITypography } from "@/pages/sample/ui";
import { RouteObject } from "react-router-dom";

export const ppdmRouter: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "my",
        element: <MyPage />,
        children: [{ path: "database", element: <Database /> }],
      },
      {
        path: "data",
        element: <DataPage />,
        children: [
          {
            path: "database",
            element: <Database />,
          },
        ],
      },
      {
        path: "sample",
        element: <Sample />,
        children: [
          {
            path: "ui",
            element: <UI />,
            children: [
              {
                path: "",
                element: <UITypography />,
              },
              {
                path: "typography",
                element: <UITypography />,
              },
              {
                path: "link",
                element: <UILink />,
              },
              {
                path: "button",
                element: <UIButton />,
              },
              {
                path: "table",
                element: <UITable />,
              },
              {
                path: "input",
                element: <UIInput />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-account",
    element: <CreateAccountPage />,
    errorElement: <ErrorPage />,
  },
];

import ProtectedRoute from "./protected-route";
import Sample from "@/pages/sample/sample";
import { DB, UI } from "@/pages/sample";
import { CreateAccountPage } from "@/pages/auths/create-account/create-account-page";
import { UIButton, UIInput, UILink, UITable, UITypography } from "@/pages/sample/ui";
import { RouteObject } from "react-router-dom";
import Layout from "@/pages/layout/layout";
import { MainPage } from "@/pages/main/main-page";
import { MyPage } from "@/pages/my/my-page";
import { DataPage } from "@/pages/data/data-page";
import { QueryPage, QueryTablePage } from "@/pages/data/query";
import { DatabaseInfoPage, DatabasePage } from "@/pages/data/database";
import { LoginPage } from "@/pages/auths/login/login-page";
import ErrorPage from "@/pages/layout/error-page";
import { DBConnection } from "@/pages/sample/db";

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
        children: [{ path: "database", element: <DatabasePage /> }],
      },
      {
        path: "data",
        element: <DataPage />,
        children: [
          {
            path: "database",
            element: <DatabasePage />,
            children: [
              {
                path: "",
                element: <DatabaseInfoPage />,
              },
              {
                path: "info",
                element: <DatabaseInfoPage />,
              },
            ],
          },
          {
            path: "qyery",
            element: <QueryPage />,
            children: [
              {
                path: "",
                element: <QueryTablePage />,
              },
            ],
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
          {
            path: "db",
            element: <DB />,
            children: [
              {
                path: "connection",
                element: <DBConnection />,
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

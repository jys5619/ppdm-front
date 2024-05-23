import ErrorPage from "../../pages/layout/error-page";
import Layout from "../../pages/layout/layout";
import { LoginPage } from "../../pages/auths/login/login-page";
import { Database } from "../../pages/datas/database-page";
import { MainPage } from "../../pages/main-page";
import { MyPage } from "../../pages/my/my-page";
import { DataPage } from "../../pages/datas/data-page";
import ProtectedRoute from "./protected-route";
import { CreateAccountPage } from "../../pages/auths/create-account/create-account-page";
import { SampleUI } from "@/pages/sample/ui/sample-ui";

export const ppdmRouter = [
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
        children: [
          {
            path: "database",
            element: <Database />,
          },
        ],
      },
      {
        path: "datas",
        element: <DataPage />,
        children: [
          {
            path: "database",
            element: <Database />,
          },
        ],
      },
      {
        path: "sample-ui",
        element: <SampleUI />,
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

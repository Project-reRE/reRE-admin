import { RouteObject } from "react-router-dom";
import Login from "./page/Login";
import UserPage from "./page/UserPage";
import DashboardLayout from "./components/DashboardLayout";
import { AuthGuard, GuestGuard } from "./components/Guard";

// 라우터 설정
const routes: RouteObject[] = [
  {
    path: "/login",
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: "/",
    children: [
      {
        path: "/management",
        element: (
          <AuthGuard>
            <DashboardLayout />
          </AuthGuard>
        ),
        children: [
          {
            path: "users",
            element: <UserPage />,
          },
        ],
      },
    ],
  },
];

export default routes;

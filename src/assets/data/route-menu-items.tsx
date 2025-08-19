import CommonLayout from "@/layouts/CommonLayout";
import OverviewPage from "@/pages/(common)/OverviewPage";
import NotFoundPage from "@/pages/(partial)/NotFoundPage";
import type { TItem } from "@/types/route-menu.type";
import { Navigate } from "react-router";

export const items: TItem[] = [
  {
    path: "",
    element: <CommonLayout />,
    routeType: "layout",
    children: [
      {
        index: true,
        element: <Navigate to="/products/civil-3d/overview" replace />,
      },
      {
        path: "products/civil-3d/overview",
        element: <OverviewPage />,
      },
    ],
  },
  {
    menuType: "invisible",
    path: "*",
    element: <NotFoundPage />,
  },
];

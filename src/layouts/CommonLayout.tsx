import React from "react";
import { Outlet } from "react-router";

const CommonLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default CommonLayout;

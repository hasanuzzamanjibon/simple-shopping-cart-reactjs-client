import React from "react";
import { Outlet } from "react-router-dom";

function MainLayouts() {
  return (
    <React.Fragment>
      <Outlet></Outlet>
    </React.Fragment>
  );
}

export default MainLayouts;

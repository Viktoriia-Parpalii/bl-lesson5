import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/rates">Rates</NavLink>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Header;

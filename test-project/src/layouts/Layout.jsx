
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <div className="layout">
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
)

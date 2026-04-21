import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import SubNavbar from "../layouts/SubNavbar";
import Footer from "../layouts/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <header className="min-h-16 sticky top-0 z-50 shadow-sm">
        <Navbar></Navbar>
      </header>

      <main className="min-h-[calc(100vh-244px)] py-8 max-w-7xl mx-auto w-11/12">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <header className="min-h-16 sticky top-0 z-50 shadow-sm">
        <Navbar></Navbar>
      </header>

      <main className="min-h-[calc(100vh-229px)] py-8 px-12 container mx-auto">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-200">
      <Navbar />
      <main className="flex-1 px-4">
        <div className="mx-auto max-w-3xl py-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}


import { Toaster } from "react-hot-toast";
import SiteLoader from "./components/SiteLoader";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function SiteLayout({ children }) {
  return (
    <div className="pageOffset">
      <SiteLoader />
      <Header />
      {children}
      <FloatingActions/>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

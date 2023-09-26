import "./App.css";
import MainRoutes from "./Routing/MainRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;

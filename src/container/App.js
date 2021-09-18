import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="overflow-x-auto">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

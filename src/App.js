import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Explore from "./components/Explore";

function App() {
  return (
    <div className="bg-black ">
      {/* Navbar */}
      <Navbar />

      {/* Explore */}
      <Explore />
      <div className="h-screen bg-black"></div>
    </div>
  );
}

export default App;

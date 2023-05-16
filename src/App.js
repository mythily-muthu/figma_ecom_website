import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col">

      <Router>
        {/* layout */}
        {/* navbar */}
        <Navbar />
        {/* content */}
        <Content />
      </Router>
    </div>
  );
}

export default App;

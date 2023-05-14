import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="">

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

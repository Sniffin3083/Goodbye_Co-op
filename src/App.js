import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

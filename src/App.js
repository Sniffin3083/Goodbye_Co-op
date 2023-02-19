import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

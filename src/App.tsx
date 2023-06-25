import { Login } from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegisterCompany } from "./pages/RegisterCompany";
import { ListCompanies } from "./pages/ListCompanies";
import { Stocktaking } from "./pages/Stocktaking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/list-companies" element={<ListCompanies />} />
        <Route path="/stocktaking" element={<Stocktaking />} />
      </Routes>
    </Router>
  );
}

export default App;

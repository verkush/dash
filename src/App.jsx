import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import Documents from "./pages/Documents";
import Reports from "./pages/Reports";
import Innovation from "./pages/Innovation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="teams" element={<Teams />} />
          <Route path="projects" element={<Projects />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="docs" element={<Documents />} />
          <Route path="reports" element={<Reports />} />
          <Route path="innovation" element={<Innovation />} />
        </Route>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

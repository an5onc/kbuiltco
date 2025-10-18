import { HashRouter as Router, Routes, Route } from "react-router-dom";
import EntryForm from "./components/EntryForm";
import AdminPage from "./pages/AdminPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryForm />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}
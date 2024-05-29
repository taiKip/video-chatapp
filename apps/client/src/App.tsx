import { Routes, Route } from "react-router-dom";
import "./App.css";
import UsersPage from "./features/users/UsersPage";
import Layout from "./components/Layout";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/users" element={<UsersPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;

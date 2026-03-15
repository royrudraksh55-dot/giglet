import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostTask from "./pages/PostTask";
import ClientDashboard from "./pages/ClientDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";
import TaskDetails from "./pages/TaskDetails";
import Profile from "./pages/Profile";
import CompleteProfile from "./pages/CompleteProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/complete-profile" element={<CompleteProfile />} />

        {/* Default route → redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected area with Layout */}
        <Route element={<Layout />}>
          <Route path="/post-task" element={<PostTask />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/worker-dashboard" element={<WorkerDashboard />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
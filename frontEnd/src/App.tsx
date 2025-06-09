import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/MonitoringApp/Pages/Dashboard";
import AddUser from "@/components/MonitoringApp/Pages/Users/Add";
import UserList from "@/components/MonitoringApp/Pages/Users/List";
import Edit from "@/components/MonitoringApp/Pages/Users/Edit";
import Login from "./components/MonitoringApp/Pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedLayout from "./components/ProtectedLayout"; // <- new

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className='font-display'>
      <Routes>
        {/* Public route without sidebar */}
        <Route path='/login' element={<Login />} />

        {/* Protected routes with sidebar layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/addUser' element={<AddUser />} />
            <Route path='/userlist' element={<UserList />} />
            <Route path='/users/:id/edit' element={<Edit />} />
          </Route>
        </Route>

        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;

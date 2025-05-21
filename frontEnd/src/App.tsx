import "./App.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/MonitoringApp/SideBar/AppSideBar";
import Profile from "./MonitoringApp/Profile/Profile";
import Dashboard from "./MonitoringApp/Pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import AddUser from "@/MonitoringApp/Pages/Users/Add";
import UserList from "@/MonitoringApp/Pages/Users/List";
import Edit from "@/MonitoringApp/Pages/Users/Edit";

function App() {
  return (
    <div className="font-display ">
      <Profile />
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <main className="flex-1 p-4 relative -top-[60px]">
            <SidebarTrigger />
          </main>
          <div className="pt-[30px] w-full shadow-lg border rounded-l  mt-5 mr-5 p-5 size-fit ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/addUser" element={<AddUser />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/edit" element={<Edit />} />
            </Routes>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default App;

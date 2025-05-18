import "./App.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/MonitoringApp/SideBar/AppSideBar";
import Profile from "./MonitoringApp/Profile/Profile";
import Dashboard from "./MonitoringApp/Dashboard";
// import { AppSidebar } from "@/MonitoringApp/SideBar/AppSideBar";

// import { AppSideBar } from "./MonitoringApp/SideBar/AppSideBar";

function App() {
  return (
    <div className='font-display '>
      <Profile />
      <SidebarProvider>
        <div className='flex w-full'>
          <AppSidebar />
          <main className='flex-1 p-4 relative -top-[60px]'>
            <SidebarTrigger />
          </main>
          <div className='pt-[30px] w-full'>
            <Dashboard />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default App;

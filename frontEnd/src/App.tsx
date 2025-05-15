import { Button } from "@/components/ui/button";
import "./App.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/MonitoringApp/SideBar/AppSideBar";
// import { AppSidebar } from "@/MonitoringApp/SideBar/AppSideBar";

// import { AppSideBar } from "./MonitoringApp/SideBar/AppSideBar";

function App() {
  return (
    <div>
      <SidebarProvider>
        <div className="flex">
          <AppSidebar />
          <main className="flex-1 p-4">
            <SidebarTrigger />
          </main>
        </div>
      </SidebarProvider>
      <Button>sss</Button>
    </div>
  );
}

export default App;

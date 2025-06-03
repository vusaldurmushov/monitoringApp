// ProtectedLayout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Profile from "@/MonitoringApp/Profile/Profile";
import { AppSidebar } from "@/MonitoringApp/SideBar/AppSideBar";
import { Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  return (
    <SidebarProvider>
      <div className='flex w-full'>
        <AppSidebar />
        <main className='flex-1 p-4  relative -top-[60px]'>
          <SidebarTrigger />
           <Profile />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

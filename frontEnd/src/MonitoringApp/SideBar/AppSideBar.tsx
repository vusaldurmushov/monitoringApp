import { Home, Folder, Circle, Users } from "lucide-react";

import { Sidebar, SidebarContent, SidebarGroup } from "@/components/ui/sidebar";

import { SidebarMenuGroup } from "./SidebarMenuGroup";

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Users",
    url: "#",
    icon: Users,
    collapse: [
      {
        title: "Əlavə et",
        url: "/addUser",
        icon: Circle,
      },
      {
        title: "Siyahı",
        url: "#",
        icon: Circle,
      },
    ],
  },
];

const items2 = [
  {
    title: "Monitorinqlər",
    url: "#",
    icon: Folder,
  },
  {
    title: "POS-İstifadə...",
    url: "#",
    icon: Folder,
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      collapsible='icon'
      className='bg-[var(--sidebar-background)]'
    >
      <div className='border-b-[1px]  bg-[var(--sidebar-background)]  '>
        <h1 className=' text-xl text-center py-4 text-white group-data-[state=collapsed]:hidden'>
          Monitoring <span className='font-semibold'>App</span>
        </h1>
      </div>
      <SidebarContent className='bg-[var(--sidebar-background)]'>
        <SidebarGroup className='flex gap-3'>
          <SidebarMenuGroup label='ƏSAS' items={items} />
          <SidebarMenuGroup label='WEB APPS' items={items2} />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

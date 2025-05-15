import { ChevronDown, Home, Inbox, Settings, Circle } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Users",
    url: "#",
    icon: Inbox,
    collapse: [
      {
        title: "Əlavə et",
        url: "#",
        icon: Circle,
      },
      {
        title: "Siyahı",
        url: "#",
        icon: Inbox,
      },
    ],
  },
];

const items2 = [
  {
    title: "Monitorinqlər",
    url: "#",
    icon: Settings,
  },
  {
    title: "POS-İstifadə...",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>ƏSAS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.collapse ? (
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center w-full">
                        <SidebarMenuButton className="flex-1 justify-between">
                          <div className="flex items-center">
                            <item.icon className="mr-2 h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarGroup className="pl-6 mt-2">
                          <SidebarGroupContent>
                            <SidebarMenu>
                              {item.collapse.map((subItem) => (
                                <SidebarMenuItem key={subItem.title}>
                                  <SidebarMenuButton asChild>
                                    <a
                                      href={subItem.url}
                                      className="flex items-center"
                                    >
                                      <subItem.icon className="mr-2 h-4 w-4" />
                                      <span>{subItem.title}</span>
                                    </a>
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              ))}
                            </SidebarMenu>
                          </SidebarGroupContent>
                        </SidebarGroup>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center">
                        {item?.icon && <item.icon className="mr-2 h-4 w-4" />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupLabel>WEB APPS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items2.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center">
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

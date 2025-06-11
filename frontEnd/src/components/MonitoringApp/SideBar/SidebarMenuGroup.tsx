// components/SidebarMenuGroup.tsx
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, type LucideIcon } from "lucide-react";
import { SidebarMenuLink } from "@/components/MonitoringApp/SideBar/SidebarMenuLink"; // import the shared component

export type TMenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  collapse?: TMenuItem[];
};

type TSidebarMenuGroup = {
  label: string;
  items: TMenuItem[];
};

export function SidebarMenuGroup({ label, items }: TSidebarMenuGroup) {
  return (
    <div>
      <SidebarGroupLabel className='text-white hover:text-[var(--sidebar-primary)]'>
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.collapse ? (
                <Collapsible>
                  <CollapsibleTrigger className='group flex items-center w-full'>
                    <SidebarMenuButton className=' group flex-1 justify-between !p-0'>
                      <div className='group flex items-center text-white  hover:text-[var(--sidebar-primary)] '>
                        <item.icon className='mr-4 h-4 w-4 text-inherit' />
                        <span className='text-inherit '>{item.title}</span>
                      </div>
                      <ChevronDown className='transition-transform group-data-[state=open]:rotate-180 text-white' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarGroup className='pl-6 mt-2'>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          {item.collapse.map((subItem) => (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton asChild>
                                <SidebarMenuLink
                                  href={subItem.url}
                                  icon={subItem.icon}
                                  title={subItem.title}
                                  small
                                />
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
                  <SidebarMenuLink
                    href={item.url}
                    icon={item.icon}
                    title={item.title}
                  />
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </div>
  );
}

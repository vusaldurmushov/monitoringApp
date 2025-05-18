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

export type TMenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  collapse?: TMenuItem[]; // recursive for nesting
};

type TSidebarMenuGroup = {
  label: string;
  items: TMenuItem[];
};

export function SidebarMenuGroup({ label, items }: TSidebarMenuGroup) {
  return (
    <>
      <SidebarGroupLabel className='text-white'>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item?.collapse ? (
                <Collapsible>
                  <CollapsibleTrigger className=' group flex items-center w-full'>
                    <SidebarMenuButton className='flex-1 justify-between'>
                      <div className='flex items-center'>
                        <item.icon className='mr-4 h-4 w-4 text-white' />
                        <span className='text-white'>{item.title}</span>
                      </div>
                      <ChevronDown className='transition-transform group-data-[state=open]:rotate-180 text-white ' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarGroup className='pl-6 mt-2'>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          {item.collapse.map((subItem) => (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton asChild>
                                <a
                                  href={subItem.url}
                                  className='flex items-center'
                                >
                                  <subItem.icon className=' scale-60 w-3 h-3 mr-2 text-white' />
                                  <span className='text-white'>
                                    {subItem.title}
                                  </span>
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
                  <a href={item.url} className='flex items-center text-white'>
                    {item?.icon && (
                      <item.icon className='  h-4 w-4 mr-2 text-white' />
                    )}
                    <span className='text-white '>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </>
  );
}

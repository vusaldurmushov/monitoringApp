// components/SidebarMenuGroup.tsx
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, type LucideIcon } from "lucide-react";
import { SidebarMenuLink } from "@/components/MonitoringApp/SideBar/SidebarMenuLink";

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
    <SidebarGroup className="flex ">
      <SidebarGroupLabel className="text-white hover:text-[var(--sidebar-primary)]">
        {label}
      </SidebarGroupLabel>
      <SidebarMenu>
        <div className="w-64 p-4 space-y-2">
          {items.map((item) => {
            const Icon = item.icon;

            if (item.collapse) {
              return (
                <Collapsible key={item.title}>
                  <CollapsibleTrigger asChild className="group p-0 ">
                    <SidebarMenuButton className=" group flex justify-between !p-0">
                      <div className="group flex items-center text-white  hover:text-[var(--sidebar-primary)]">
                        <Icon className="mr-4 w-4 text-inherit" />
                        <span className="text-inherit text-[16px] ">{item.title}</span>
                      </div>
                      <ChevronDown className="transition-transform group-data-[state=open]:rotate-180 text-white" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1 mt-2">
                    {item.collapse.map((subItem) => (
                      <SidebarMenuLink
                        key={subItem.title}
                        href={subItem.url}
                        icon={subItem.icon}
                        title={subItem.title}
                        small
                      />
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            }

            return (
              <SidebarMenuLink
                key={item.title}
                href={item.url}
                icon={item.icon}
                title={item.title}
              />
            );
          })}
        </div>
      </SidebarMenu>
    </SidebarGroup>
  );
}

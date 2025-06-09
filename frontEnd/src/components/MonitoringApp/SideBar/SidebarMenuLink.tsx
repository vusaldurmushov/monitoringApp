// components/SidebarMenuLink.tsx
import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type SidebarMenuLinkProps = {
  href: string;
  icon: LucideIcon;
  title: string;
  small?: boolean; // for sub-items
};

export function SidebarMenuLink({
  href,
  icon: Icon,
  title,
  small = false,
}: SidebarMenuLinkProps) {
  return (
    <div className='text-white mb-2 hover:text-[var(--sidebar-primary)] '>
      <Link to={href} className='flex items-center text-inherit gap-0.5'>
        <Icon
          className={`mr-2 ${
            small ? "w-3 h-3 scale-60" : "w-4 h-4"
          } text-inherit `}
        />
        <span className='text-inherit '>{title}</span>
      </Link>
    </div>
  );
}

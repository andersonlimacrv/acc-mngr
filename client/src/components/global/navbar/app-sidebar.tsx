import { NavMain } from "@/components/global/navbar/nav-main"
import { NavSecondary } from "@/components/global/navbar/nav-secondary"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader
} from "@/components/ui/sidebar"
import { navbarItems } from "@/lib/constants/navbar"
import { WorkspaceSwitcher } from "@/components/global/workspace-switcher";
import { Logo } from "@/components/common/Logo";
import { UserNavbarItems } from "@/components/global/navbar/UserNavbarItems";
import { useSidebar } from "@/components/ui/sidebar";

const data = {
  workspaces: [
    {
      name: "Workspace Name",
      logo_url: null,
      team: "Team 1",
    },
    {
      name: "Workspace Name 2",
      logo_url: null,
      team: "Team 2",
    },
  ],
};

const user = {
  user_id: '123e4567-e89b-12d3-a456-426614174000',
  name: "Anderson",
  email: "anderson@example.com",
  avatar: "https://i.pravatar.cc/300",
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile } = useSidebar();
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-1 mr-auto">
          <Logo size="sm" /> <SidebarGroupLabel className="text-primary text-lg tracking-widest">acc-mngr</SidebarGroupLabel>
        </div>
      </SidebarHeader>
      <SidebarGroupLabel className="mb-2 mt-6">
        <WorkspaceSwitcher workspaces={data.workspaces} isMobile={isMobile} />
      </SidebarGroupLabel>
      <SidebarContent>
        {navbarItems.navMain.map((group) => (
          <NavMain key={group.label} label={group.label} items={group.items} />
        ))}
        <NavSecondary items={navbarItems.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <UserNavbarItems user={user} isMobile={isMobile}/>
      </SidebarFooter>
    </Sidebar>
  );
}

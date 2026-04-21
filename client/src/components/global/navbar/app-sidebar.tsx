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
import { useAuth } from "@/hooks/useAuth";

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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile } = useSidebar();
  const { user } = useAuth();

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader className="flex items-center flex-row">
        <div className="w-1/3">
          <Logo size="sm" />
        </div>
        <SidebarGroupLabel className="w-2/3 p-0 m-0 text-primary text-lg tracking-widest">acc-mngr</SidebarGroupLabel>
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
        {user && <UserNavbarItems user={user} isMobile={isMobile}/>}
      </SidebarFooter>
    </Sidebar>
  );
}

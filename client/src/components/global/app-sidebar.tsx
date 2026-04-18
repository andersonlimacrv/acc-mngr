import { NavMain } from "@/components/global/nav-main"
import { NavSecondary } from "@/components/global/nav-secondary"

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
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <Logo size="md" />
      </SidebarHeader>
      <SidebarGroupLabel className="mb-2 mt-6">
        <WorkspaceSwitcher workspaces={data.workspaces} />
      </SidebarGroupLabel>
      <SidebarContent>
        <NavMain items={navbarItems.navMain} />
        <NavSecondary items={navbarItems.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>{/* nada ainda */}</SidebarFooter>
    </Sidebar>
  );
}

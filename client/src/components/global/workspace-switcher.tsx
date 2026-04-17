
import { HugeiconsIcon } from "@hugeicons/react"
import { UnfoldLessIcon, Exchange01Icon, AddCircleIcon } from '@hugeicons/core-free-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";


import UserAvatar from "@/components/common/UserAvatar";

export function WorkspaceSwitcher({
  workspaces,
}: {
  workspaces: {
    name: string;
    logo_url: string | null;
    unidade: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const activeWorkspace = workspaces[0];

  if (!activeWorkspace) {
    return null;
  }

  return (
    <SidebarMenu className="mb-4">
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer shadow-sm rounded-lg w-full py-2 flex items-center justify-between data-[state=open]:bg-primary/40 data-[state=open]:text-prumary-foreground px-2 bg-muted-foreground/5 hover:bg-muted-foreground/10 transition-colors duration-150">
            <div className="flex justify-center items-center gap-2">
              <UserAvatar
                name={activeWorkspace.name}
                avatarUrl={activeWorkspace.logo_url? activeWorkspace.logo_url : undefined}
                size="md"
                fallbackIcon={activeWorkspace.name?.[0]?.toUpperCase()}
              />
              <span className="font-bold font-stretch-75% text-[1rem]">{activeWorkspace.name}</span>
            <HugeiconsIcon
        icon={UnfoldLessIcon}
        size={24}
        color="currentColor"
        strokeWidth={1.5}
    />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-border">
              Unidade <HugeiconsIcon icon={Exchange01Icon} />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {" "}
             <HugeiconsIcon icon={AddCircleIcon} /> New Workspace
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

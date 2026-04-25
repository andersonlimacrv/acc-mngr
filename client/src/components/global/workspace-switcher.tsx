
import { HugeiconsIcon } from "@hugeicons/react"
import { ChevronsUpDown } from "lucide-react"
import { Exchange01Icon, AddCircleIcon } from '@hugeicons/core-free-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/animate-ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";


import UserAvatar from "@/components/common/UserAvatar";

import { useWorkspace } from "@/hooks/useWorkspace";

export function WorkspaceSwitcher({
  isMobile
}: {
  isMobile: boolean;
}) {
  const { workspaces, activeWorkspace, setActiveWorkspace } = useWorkspace();

  if (!activeWorkspace) {
    return null;
  }

  return (
    <SidebarMenu className="mb-4">
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer shadow-sm rounded-2xl w-full py-2 flex items-center justify-between data-[state=open]:bg-primary/40 data-[state=open]:text-prumary-foreground px-2 bg-muted-foreground/5 hover:bg-muted-foreground/10 transition-colors duration-150">
            <div className="flex justify-between items-center gap-2 w-full">
              <UserAvatar
                name={activeWorkspace.name}
                avatarUrl={activeWorkspace.logo_url? activeWorkspace.logo_url : undefined}
                size="md"
                fallbackIcon={activeWorkspace.name?.[0]?.toUpperCase()}
              />
              <span className="font-semibold text-sm font-stretch-75% truncate max-w-[120px]">{activeWorkspace.name}</span>
              <ChevronsUpDown className="ml-auto w-4 h-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side={ isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-border flex items-center gap-2">
              Workspaces <HugeiconsIcon icon={Exchange01Icon} className=" ml-auto inline-flex"/>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {workspaces.map((workspace) => (
              <DropdownMenuItem 
                key={workspace.name}
                onClick={() => setActiveWorkspace(workspace)}
              >
                <span className="font-bold px-2 min-w-32">{workspace.name}</span>
              </DropdownMenuItem>
            ))}
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

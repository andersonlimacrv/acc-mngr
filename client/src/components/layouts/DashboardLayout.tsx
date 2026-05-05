import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/global/navbar/app-sidebar";
import { Outlet } from "react-router-dom";
import DynamicBreadCrumb from "@/components/global/DynamicBreadCrumb";
import { ThemeSwitcher } from "@/components/global/ThemeSwitcher";
import { Separator } from "@/components/ui/separator";
import { WorkspaceProvider } from "@/contexts/workspace-context";

export function DashboardLayout() {
  return (
    <WorkspaceProvider>
      <SidebarProvider className="selection:bg-primary/30 selection:text-primary">
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-col h-screen overflow-hidden my-[-10px]">
            <header className="flex h-12 shrink-0 gap-2 items-center mt-3 px-4 border-b border-muted-foreground/10  transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 w-full">
                <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />
                <DynamicBreadCrumb />
              </div>
              <ThemeSwitcher />
            </header>
            <div className="flex flex-1 flex-col gap-4 mb-2 p-4 overflow-y-auto!">
              <Outlet />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </WorkspaceProvider>
  );
}

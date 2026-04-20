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

export function DashboardLayout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
           <header className="flex h-12 shrink-0  items-center gap-2 px-3 lg:pr-5 border-b border-muted-foreground/10  transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
             <div className="flex items-center gap-2 w-full">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-2"
              />
              <DynamicBreadCrumb />
            </div>
            <div className="lg:-mr-3">
              <ThemeSwitcher />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 mx-2 my-4 p-2 pt-0 ">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

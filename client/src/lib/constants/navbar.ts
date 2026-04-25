import {
  LayoutDashboard,
  Folder,
  Logs,
  LifeBuoy,
  Wallet,
  Settings,
  CircleFadingArrowUp,
  AppWindowMac,
  Building2,
} from "lucide-react";

export const navbarItems = {
  navMain: [
    {
      label: "Platform",
      items: [
        {
          title: "Overview",
          url: "/~",
          icon: LayoutDashboard,
          isActive: false,
        },
        {
          title: "Applications",
          url: "/applications",
          icon: AppWindowMac,
          isActive: true,
        },
        {
          title: "Organizations",
          url: "/organizations",
          icon: Building2,
          isActive: true,
        },
      ],
    },
    {
      label: "Management",
      items: [
        {
          title: "Settings",
          url: "/settings",
          icon: Settings,
          isActive: true,
          items: [
            {
              title: "Billing",
              url: "/settings/billing",
              icon: Wallet,
            },
            {
              title: "Workspaces",
              url: "/settings/workspaces",
              icon: Folder,
            },
            {
              title: "Integrations",
              url: "/settings/integrations",
              icon: CircleFadingArrowUp,
            },
          ],
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/",
      icon: LifeBuoy,
      isActive: false,
    },
    {
      title: "Documentation",
      url: "/docs",
      icon: Logs,
      isActive: false,
    }
  ],
};

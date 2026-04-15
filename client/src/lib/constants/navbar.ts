import {
  LayoutDashboard,
  Package,
  Logs,
  LifeBuoy,
  CloudUpload,
  Settings,
  CircleFadingArrowUp,
  Radio,
  Cpu,
  Building2,
} from "lucide-react";

export const navbarItems = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: false,
    },
    {
      title: "Broker",
      url: "/broker",
      icon: Radio,
      isActive: true,
    },
    {
      title: "Organizations",
      url: "/organizations",
      icon: Building2,
      isActive: true,
    },
    {
      title: "Devices",
      url: "/devices",
      icon: Cpu,
      isActive: true,
      items: [
        {
          title: "Show All",
          url: "/devices/all",
          icon: Logs,
        },
        {
          title: "Configuration",
          url: "/devices/config",
          icon: Settings,
        },
        {
          title: "Upgrade Firmware",
          url: "/devices/upgrade",
          icon: CircleFadingArrowUp,
        },
      ],
    },
    {
      title: "Firmware",
      url: "/firmware",
      icon: Package,
      isActive: true,
      items: [
        {
          title: "Show All",
          url: "/firmware/all",
          icon: Logs,
        },
        {
          title: "Upload",
          url: "/firmware/upload",
          icon: CloudUpload,
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
    }
  ],
};

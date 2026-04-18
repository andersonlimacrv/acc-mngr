import { ChevronRight, type LucideIcon } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  listVariantsSubItemsAppearLeft,
  divListGrow,
} from "@/components/common/animations/variants";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
}

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: NavSubItem[];
}

export function NavMain({ items }: { items: NavItem[] }) {
  const location = useLocation();

  const isItemActive = (itemUrl: string) => {
    const currentPath = location.pathname;
    if (currentPath === itemUrl) return true;
    if (itemUrl !== "/" && currentPath.startsWith(itemUrl + "/")) return true;
    return false;
  };

  const isSubItemActive = (subItemUrl: string) =>
    location.pathname === subItemUrl;

  const shouldBeOpen = (item: NavItem) => {
    if (isItemActive(item.url)) return true;
    if (item.isActive) return true;
    if (item.items) {
      return item.items.some((subItem) => isSubItemActive(subItem.url));
    }
    return false;
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={shouldBeOpen(item)}
          >
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                isActive={isItemActive(item.url)}
                className="group data-[active=true]:bg-accent bg-muted-foreground/5 data-[active=true]:text-muted-foreground font-light transition-colors duration-300 ease-in-out hover:bg-accent/30 hover:text-accent-foreground"
              >
                <Link to={item.url}>
                  {item.icon && (
                    <item.icon className="mr-2 h-4 w-4 transition-transform duration-300 scale-120" />
                  )}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>

              <AnimatePresence>
                {item.items && item.items.length > 0 && (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction className="transition-transform duration-300 data-[state=open]:rotate-90">
                        <ChevronRight />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="overflow-hidden">
                      <SidebarMenuSub>
                        <motion.div
                          className="flex flex-col h-12"
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          variants={divListGrow}
                        >
                          {item.items.map((subItem, i) => (
                            <motion.div
                              key={subItem.title}
                              custom={i}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={listVariantsSubItemsAppearLeft}
                            >
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={isSubItemActive(subItem.url)}
                                  className="data-[active=true]:bg-muted-foreground/10 my-1 transition-colors duration-300 hover:bg-muted/20 font-normal"
                                >
                                  <Link to={subItem.url}>
                                    {subItem.icon && (
                                      <div className="text-primary dark:text-primary/60 transition-transform duration-300 hover:scale-110">
                                        <subItem.icon className="mr-2 h-4 w-4" />
                                      </div>
                                    )}
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </motion.div>
                          ))}
                        </motion.div>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                )}
              </AnimatePresence>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

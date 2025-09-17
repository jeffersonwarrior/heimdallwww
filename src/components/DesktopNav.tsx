"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Features", href: "#features" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "FAQ", href: "#faq" },
  { title: "Contact", href: "#contact" },
];

export function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              href={item.href}
              className={cn(navigationMenuTriggerStyle(), "text-heimdall-text-primary hover:text-heimdall-accent-red")}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
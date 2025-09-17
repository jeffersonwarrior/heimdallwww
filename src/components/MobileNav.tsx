"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Features", href: "#features" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Contact", href: "#contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-heimdall-text-primary">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 py-6">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-lg font-medium text-heimdall-text-primary hover:text-heimdall-accent-red transition-colors"
              onClick={() => setIsOpen(false)} // Close sheet on link click
            >
              {item.title}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
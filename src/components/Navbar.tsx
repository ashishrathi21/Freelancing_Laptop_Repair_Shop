"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import{ InteractiveHoverButton }from "@/components/ui/interactive-hover-button";
import { useState } from "react";

function NavbarDemo() {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ FIXED NAVBAR WRAPPER */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-neutral-200/40 dark:border-neutral-800/40">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />

            <div className="flex items-center gap-4">
          
              <InteractiveHoverButton  text="Call Now !" />
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-300 text-lg"
                >
                  {item.name}
                </a>
              ))}

              <div className="flex w-full flex-col gap-4 mt-4">
                <div className="flex items-center gap-4">
          
              <InteractiveHoverButton  text="Call Now !" />
            </div>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

     
   
    </>
  );
}



export default NavbarDemo;

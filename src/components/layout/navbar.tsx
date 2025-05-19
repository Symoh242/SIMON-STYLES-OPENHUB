
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { LogoIcon } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/laptops', label: 'Laptops' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Avoid rendering on server to prevent hydration mismatch for Sheet on mobile
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <LogoIcon className="h-8 w-8" />
            <span className="font-bold text-xl text-primary">Hub</span>
          </Link>
          {/* Placeholder for nav links to maintain layout consistency before hydration */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.href} className="px-3 py-2 rounded-md text-sm font-medium text-transparent bg-muted/50 animate-pulse w-20 h-8"></div>
            ))}
          </div>
          <div className="md:hidden">
             <Button variant="ghost" size="icon" disabled>
                <Menu className="h-6 w-6" />
             </Button>
          </div>
        </div>
      </header>
    );
  }

  const NavLinksContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile && setIsSheetOpen(false)}
          className={cn(
            'px-3 py-2 rounded-md text-sm font-medium transition-colors',
            pathname === link.href
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground hover:bg-accent hover:text-accent-foreground',
            isMobile && 'block w-full text-left mb-2 text-lg py-3'
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
          <LogoIcon className="h-8 w-8" />
           <span className="font-bold text-xl text-primary">Hub</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavLinksContent />
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6 pt-10">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="mb-6 self-start flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
                  <LogoIcon className="h-10 w-10" />
                  <span className="font-bold text-2xl text-primary">Hub</span>
                </Link>
                <NavLinksContent isMobile={true} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

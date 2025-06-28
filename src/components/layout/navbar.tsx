
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
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Share Your Story' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isSheetOpen && setIsSheetOpen(false)}
          className={cn(
            'px-3 py-2 rounded-md text-sm font-medium transition-colors',
            pathname === link.href
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground hover:bg-accent hover:text-accent-foreground',
            isSheetOpen && 'block w-full text-left mb-2 text-lg py-3'
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <LogoIcon className="h-8 w-8" />
            <span className="font-bold text-xl text-primary">A Voice for Kenya</span>
          </Link>
          <div className="md:hidden">
             <Button variant="ghost" size="icon" disabled>
                <Menu className="h-6 w-6" />
             </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
          <LogoIcon className="h-8 w-8" />
           <span className="font-bold text-xl text-primary sm:hidden md:inline-block">A Voice for Kenya</span>
           <span className="font-bold text-xl text-primary sm:inline-block md:hidden">AVFK</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavContent />
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
              <NavContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

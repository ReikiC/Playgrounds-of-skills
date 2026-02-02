'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Sun, Moon, Search, Globe } from 'lucide-react';
import { useTheme } from '@/components/providers/theme-provider';
import { useSearchParams } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [mounted, setMounted] = React.useState(false);
  const t = useTranslations('nav');
  const tHome = useTranslations('home');
  const tTheme = useTranslations('theme');
  const tLang = useTranslations('language');
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const locale = useLocale();
  const searchParams = useSearchParams();

  // useEffect only runs on the client, so we can safely set mounted
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/biography`, label: t('biography') },
    { href: `/${locale}/policies`, label: t('policies') },
    { href: `/${locale}/gallery`, label: t('gallery') },
    { href: `/${locale}/about`, label: t('about') },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/${locale}?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPathname;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              TRUMP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="hidden sm:flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm font-medium"
            >
              <Globe className="h-4 w-4" />
              <span>{locale === 'en' ? '中文' : 'EN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label={tTheme('toggle')}
            >
              {mounted && theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : mounted && theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                // Placeholder to prevent layout shift during SSR
                <div className="h-5 w-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <form onSubmit={handleSearch} className="py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={tHome('searchPlaceholder')}
                className="w-full pl-10 pr-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
            </div>
          </form>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-md hover:bg-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLocale}
              className="w-full flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-accent transition-colors font-medium"
            >
              <Globe className="h-4 w-4" />
              <span>{locale === 'en' ? '中文' : 'English'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

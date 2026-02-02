import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { locales, type Locale } from '@/i18n/request';

const CURRENT_YEAR = new Date().getFullYear();

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Locale validation is handled by middleware and i18n/request.ts
  const messages = await getMessages({ locale });

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <NextIntlClientProvider messages={messages}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t py-8 mt-12">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              <p>&copy; {CURRENT_YEAR} President Donald J. Trump Tribute. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}

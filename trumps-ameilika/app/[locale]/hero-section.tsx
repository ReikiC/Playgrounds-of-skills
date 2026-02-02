'use client';

import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('home');

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t('subtitle')}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('welcome')}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-red-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              {t('cta')}
            </a>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                45th
              </div>
              <div className="text-sm text-muted-foreground">President</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                47th
              </div>
              <div className="text-sm text-muted-foreground">President</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

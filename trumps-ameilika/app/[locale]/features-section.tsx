'use client';

import { useTranslations } from 'next-intl';

export function FeaturesSection() {
  const tNav = useTranslations('nav');

  const features = [
    {
      title: tNav('biography'),
      description: 'Discover the remarkable journey from business to presidency',
      href: '/biography',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: tNav('policies'),
      description: 'Explore the policies that shaped a nation',
      href: '/policies',
      gradient: 'from-red-500 to-red-700'
    },
    {
      title: tNav('gallery'),
      description: 'View historic moments captured in time',
      href: '/gallery',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      title: tNav('about'),
      description: 'Learn about this tribute website',
      href: '/about',
      gradient: 'from-amber-500 to-amber-700'
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Explore</h2>
          <p className="text-xl text-muted-foreground">
            Discover the legacy and vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <a
              key={feature.href}
              href={feature.href}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="relative">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';

export default function PoliciesPage() {
  const t = useTranslations('policies');

  return (
    <div className="min-h-screen">
      <HeroSection />
      <PoliciesGrid />
    </div>
  );
}

function HeroSection() {
  const t = useTranslations('policies');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}

function PoliciesGrid() {
  const t = useTranslations('policies');

  const policies = [
    {
      key: 'economy',
      icon: '💰',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-950'
    },
    {
      key: 'immigration',
      icon: '🛡️',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      key: 'foreignPolicy',
      icon: '🌎',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      key: 'trade',
      icon: '🤝',
      gradient: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {policies.map((policy) => (
              <div
                key={policy.key}
                className={`group relative overflow-hidden rounded-2xl border bg-card p-8 hover:shadow-2xl transition-all hover:scale-105`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${policy.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl">{policy.icon}</span>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">
                        {t(`${policy.key}.title`)}
                      </h2>
                      <div className={`h-1 w-20 bg-gradient-to-r ${policy.gradient} rounded-full`} />
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t(`${policy.key}.content`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

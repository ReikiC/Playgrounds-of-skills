import { useTranslations } from 'next-intl';

export default function BiographyPage() {
  const t = useTranslations('biography');

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContentSection />
    </div>
  );
}

function HeroSection() {
  const t = useTranslations('biography');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}

function ContentSection() {
  const t = useTranslations('biography');

  const milestones = [
    {
      year: '1946',
      title: t('earlyLife'),
      content: t('earlyLifeContent'),
      icon: '🏠'
    },
    {
      year: '1970s-2015',
      title: t('businessCareer'),
      content: t('businessCareerContent'),
      icon: '💼'
    },
    {
      year: '2016-2021',
      title: t('politicalCareer'),
      content: t('politicalCareerContent'),
      icon: '🏛️'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-gradient-to-b from-blue-600 to-red-600"
            >
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-red-600" />
              <div className="mb-4">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {milestone.year}
                </span>
              </div>
              <div className="flex items-start gap-4 mb-3">
                <span className="text-4xl">{milestone.icon}</span>
                <h2 className="text-3xl font-bold">{milestone.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {milestone.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

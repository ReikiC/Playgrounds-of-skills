import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContentSection />
    </div>
  );
}

function HeroSection() {
  const t = useTranslations('about');

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
  const t = useTranslations('about');

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t('content')}
            </p>

            <div className="my-12 p-8 rounded-2xl border bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Mission Statement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website serves as a comprehensive tribute to the 45th and 47th President of the United States,
                Donald J. Trump. It aims to document his journey, achievements, and the impact of his policies on
                the American people and the world.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="text-center p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                  2016
                </div>
                <div className="text-sm text-muted-foreground">First Term Begins</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-2">
                  2024
                </div>
                <div className="text-sm text-muted-foreground">Second Term Begins</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
                  47
                </div>
                <div className="text-sm text-muted-foreground">President Number</div>
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl border bg-gradient-to-r from-blue-600 to-red-600 text-white">
              <h3 className="text-2xl font-bold mb-2">Making America Great Again</h3>
              <p className="text-blue-50">A vision for prosperity, strength, and American greatness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

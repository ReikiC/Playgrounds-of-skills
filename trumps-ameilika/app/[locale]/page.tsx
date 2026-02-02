import { Suspense } from 'react';
import { HeroSection } from './hero-section';
import { FeaturesSection } from './features-section';

interface HomePageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}

export default function HomePage({ params, searchParams }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Suspense fallback={null}>
        <SearchWrapper params={params} searchParams={searchParams} />
      </Suspense>
      <FeaturesSection />
    </div>
  );
}

async function SearchWrapper({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const [{ locale }, queryParams] = await Promise.all([params, searchParams]);
  if (queryParams.q) {
    const { SearchResults } = await import('@/components/ui/search-results');
    return <SearchResults query={queryParams.q} locale={locale} />;
  }
  return null;
}

'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Search } from 'lucide-react';
import { search, type SearchItem } from '@/lib/search';

interface SearchResultsProps {
  query: string;
  locale: string;
}

export function SearchResults({ query, locale }: SearchResultsProps) {
  const t = useTranslations('search');
  const [results, setResults] = React.useState<SearchItem[]>([]);

  React.useEffect(() => {
    if (query) {
      const searchResults = search(query, locale);
      setResults(searchResults);
    }
  }, [query, locale]);

  if (!query) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
          <p className="text-muted-foreground">
            {results.length} {t('results')} &quot;{query}&quot;
          </p>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-12">
            <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">
              {t('noResults')} &quot;{query}&quot;
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map((result) => (
              <Link
                key={result.id}
                href={result.url}
                className="block p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <h2 className="text-xl font-semibold mb-2">{result.title}</h2>
                <p className="text-muted-foreground line-clamp-2">{result.content}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

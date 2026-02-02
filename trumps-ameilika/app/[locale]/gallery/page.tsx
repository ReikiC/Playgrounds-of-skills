import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function GalleryPage() {
  const t = useTranslations('gallery');

  // Placeholder images - in production, these would be real images
  const galleryItems = [
    {
      id: 1,
      title: 'Inauguration Day',
      description: 'The 45th President takes the oath of office',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      title: 'Campaign Rally',
      description: 'Speaking to thousands of supporters',
      color: 'from-red-600 to-red-800'
    },
    {
      id: 3,
      title: 'White House',
      description: 'In the Oval Office',
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 4,
      title: 'Meeting World Leaders',
      description: 'Strengthening international relationships',
      color: 'from-green-600 to-green-800'
    },
    {
      id: 5,
      title: 'American Flag',
      description: 'Proud moments with the flag',
      color: 'from-amber-600 to-amber-800'
    },
    {
      id: 6,
      title: 'With Supporters',
      description: 'Connecting with the American people',
      color: 'from-cyan-600 to-cyan-800'
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <GalleryGrid items={galleryItems} />
    </div>
  );
}

function HeroSection() {
  const t = useTranslations('gallery');

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

function GalleryGrid({ items }: { items: Array<{ id: number; title: string; description: string; color: string }> }) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:shadow-2xl transition-all hover:scale-105"
              >
                {/* Placeholder gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {item.description}
                  </p>
                </div>

                {/* Icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

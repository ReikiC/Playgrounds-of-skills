# President Donald J. Trump Tribute Website

A modern, feature-rich Next.js application dedicated to President Donald J. Trump and his vision for America.

## Features

### Core Functionality
- **5 Pages**: Home, Biography, Policies, Gallery, and About pages
- **Responsive Navigation**: Mobile-friendly navbar with hamburger menu
- **Site-wide Search**: Fuzzy search functionality using Fuse.js
- **Bilingual Support**: Full English/Chinese (i18n) implementation with next-intl
- **Dark/Light Mode**: Theme toggle with system preference detection and localStorage persistence

### Technical Highlights
- **Next.js 16**: Built with the latest Next.js App Router
- **TypeScript**: Fully typed for type safety
- **Tailwind CSS v4**: Modern utility-first CSS framework
- **Server Components**: Optimized performance with React Server Components
- **Static Generation**: Pre-rendered pages for optimal performance
- **Responsive Design**: Mobile-first approach with breakpoints

### Design Features
- **Gradient Themes**: Blue-to-red gradient accents
- **Modern UI Components**: Card layouts, hover effects, transitions
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Performance Optimized**: Font optimization, minimal bundle size

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
trumps-ameilika/
├── app/
│   ├── [locale]/           # Localized routes
│   │   ├── layout.tsx      # Locale layout with providers
│   │   ├── page.tsx        # Home page
│   │   ├── biography/      # Biography page
│   │   ├── policies/       # Policies page
│   │   ├── gallery/        # Gallery page
│   │   └── about/          # About page
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/
│   ├── layout/
│   │   └── navbar.tsx      # Navigation component
│   ├── providers/
│   │   └── theme-provider.tsx  # Theme context
│   └── ui/
│       └── search-results.tsx  # Search results component
├── i18n/
│   ├── en/
│   │   └── common.json     # English translations
│   ├── zh/
│   │   └── common.json     # Chinese translations
│   └── request.ts          # i18n configuration
├── lib/
│   ├── search.ts           # Search functionality
│   └── utils.ts            # Utility functions
├── middleware.ts           # Next.js middleware for i18n
└── next.config.ts          # Next.js configuration
```

## Key Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Styling
- **next-intl** - Internationalization
- **Fuse.js** - Fuzzy search
- **Lucide React** - Icon library
- **Geist Font** - Optimized font loading

## Routes

- `/` - Auto-redirects to detected locale
- `/en` - English home page
- `/zh` - Chinese home page
- `/en/biography` - Biography (English)
- `/zh/biography` - Biography (Chinese)
- `/en/policies` - Policies (English)
- `/zh/policies` - Policies (Chinese)
- `/en/gallery` - Gallery (English)
- `/zh/gallery` - Gallery (Chinese)
- `/en/about` - About (English)
- `/zh/about` - About (Chinese)

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/new):

```bash
vercel deploy
```

### Environment Variables

No environment variables are required for basic functionality.

## Performance

- **Lighthouse Score**: Optimized for high performance scores
- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next.js Image component used throughout
- **Code Splitting**: Automatic code splitting by route
- **Font Optimization**: Self-hosting optimized fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

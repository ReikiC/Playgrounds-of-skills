import Fuse from 'fuse.js';

export interface SearchItem {
  id: string;
  title: string;
  content: string;
  url: string;
  locale: string;
}

// Search index data - in production, this would come from your content management system
const searchIndexData: SearchItem[] = [
  // English content
  {
    id: 'en-home',
    title: 'Home',
    content: 'President Donald J. Trump 45th 47th President United States welcome legacy vision',
    url: '/en',
    locale: 'en'
  },
  {
    id: 'en-bio',
    title: 'Biography',
    content: 'Early life business career political career real estate developer New York economy',
    url: '/en/biography',
    locale: 'en'
  },
  {
    id: 'en-policies',
    title: 'Policies & Vision',
    content: 'Economic growth immigration reform America First foreign policy fair trade Making America Great Again',
    url: '/en/policies',
    locale: 'en'
  },
  {
    id: 'en-gallery',
    title: 'Photo Gallery',
    content: 'Moments in history photographs images',
    url: '/en/gallery',
    locale: 'en'
  },
  {
    id: 'en-about',
    title: 'About',
    content: 'About this site celebrating American leadership legacy achievements',
    url: '/en/about',
    locale: 'en'
  },
  // Chinese content
  {
    id: 'zh-home',
    title: '首页',
    content: '唐纳德·J·特朗普 总统 美利坚合众国 第45任 47任 欢迎遗产愿景',
    url: '/zh',
    locale: 'zh'
  },
  {
    id: 'zh-bio',
    title: '生平',
    content: '早年生活 商业生涯 政治生涯 房地产开发商 纽约 经济学',
    url: '/zh/biography',
    locale: 'zh'
  },
  {
    id: 'zh-policies',
    title: '政策',
    content: '经济增长 移民改革 美国优先 外交政策 公平贸易 让美国再次伟大',
    url: '/zh/policies',
    locale: 'zh'
  },
  {
    id: 'zh-gallery',
    title: '画廊',
    content: '历史时刻 照片 图片',
    url: '/zh/gallery',
    locale: 'zh'
  },
  {
    id: 'zh-about',
    title: '关于',
    content: '关于本站 颂扬美国领导力 遗产 成就',
    url: '/zh/about',
    locale: 'zh'
  }
];

// Initialize Fuse.js
const fuseOptions = {
  keys: ['title', 'content'],
  threshold: 0.3, // Lower = more strict matching
  distance: 100,
  minMatchCharLength: 2,
};

export function search(query: string, locale: string): SearchItem[] {
  if (!query || query.trim().length < 2) {
    return [];
  }

  // Filter by locale first
  const localeData = searchIndexData.filter(item => item.locale === locale);

  const fuse = new Fuse(localeData, fuseOptions);
  const results = fuse.search(query);

  return results.map(result => result.item);
}

export function getAllSearchItems(locale: string): SearchItem[] {
  return searchIndexData.filter(item => item.locale === locale);
}

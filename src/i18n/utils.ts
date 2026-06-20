import type { Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : 'zh';
}

export function getAlternatePath(url: URL): string {
  const lang = getLangFromUrl(url);
  if (lang === 'zh') {
    return '/en' + (url.pathname === '/' ? '' : url.pathname);
  } else {
    // strip leading /en
    const path = url.pathname.replace(/^\/en/, '') || '/';
    return path;
  }
}

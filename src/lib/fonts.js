import { Geist, Geist_Mono, Sora, Urbanist } from "next/font/google";

// Geist font - modern sans-serif
export const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-geist',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

// Geist Mono font - modern monospace
export const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-geist-mono',
  preload: true,
  fallback: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
});

// Sora font - clean sans-serif
export const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

// Urbanist font - modern geometric sans-serif
export const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-urbanist',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});
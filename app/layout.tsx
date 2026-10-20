import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '1024x1024' }],
    shortcut: '/icon.png',
    apple: [{ url: '/icon.png', sizes: '1024x1024', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}

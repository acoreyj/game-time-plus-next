import '~/styles/globals.css';
import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';
import CustomFont from 'next/font/local';
import Store from '~/components/Store';
const vt323 = CustomFont({
  src: '../../public/fonts/VT323-Regular.ttf',
  variable: '--font-vt323',
});

export const metadata: Metadata = {
  title: 'Game Time Plus',
  description: 'Track your players and more',
  manifest: 'site.webmanifest',
  icons: [
    { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
    { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${vt323.variable}`}>
      <body>{children}</body>
    </html>
  );
}

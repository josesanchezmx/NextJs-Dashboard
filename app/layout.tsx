import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
    template: '%s | Prueba Dashboard',
    default: 'Pruba Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-js-dashboard-three-eta-74.vercel.app/')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}

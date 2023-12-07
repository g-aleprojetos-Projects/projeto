import {dir} from 'i18next';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {LanguageEnum} from '@/types';
import {languages} from '../i18n/settings';
import {Footer} from '../components/footer';
import '../../../public/global/globals.css';
import Header from '../components/header';

const inter = Inter({subsets: ['latin']});

const APP_NAME = 'Portfólio Page';
const APP_DESCRIPTION = 'Meu portfólio online, com projetos e atividades.';

export const metadata: Metadata = {
  title: 'Portfolio page',
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  manifest: './manifest.json',
  icons: [
    {rel: 'apple-touch-icon', url: './icons/apple-touch-icon.png'},
    {rel: 'shortcut icon', url: './icons/favicon.ico'},
  ],
  keywords: ['nextjs', 'pwa', 'next-pwa'],
};

export async function generateStaticParams() {
  return languages.map((language) => ({language}));
}

export default async function RootLayout({
  children,
  params: {locale},
}: {
  children: React.ReactNode;
  params: {
    locale: LanguageEnum;
  };
}) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body>
        <Header language={locale} />
        {children}
        <Footer languagem={locale} />
      </body>
    </html>
  );
}

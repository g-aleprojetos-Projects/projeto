import {getTranslator} from 'next-intl/server';
import {LanguageEnum} from '@/types';

export default async function Home({
  params: {locale},
}: {
  params: {locale: LanguageEnum};
}) {
  const t = await getTranslator(locale, 'home');
  return <h1 data-testid='teste_home'>{t('title')}</h1>;
}

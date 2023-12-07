import {LanguageEnum} from '@/types';
import {useTranslation} from '../../i18n';
import {getTranslator} from 'next-intl/server';

export default async function About({
  params: {locale},
}: {
  params: {locale: LanguageEnum};
}) {
  const t = await getTranslator(locale, 'about');
  return <h1 data-testid='teste_home'>{t('title')}</h1>;
}

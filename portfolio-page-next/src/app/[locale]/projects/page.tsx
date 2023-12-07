import {LanguageEnum} from '@/types';
import {useTranslation} from '../../i18n/client';
import {getTranslator} from 'next-intl/server';

export default async function Projects({
  params: {locale},
}: {
  params: {locale: LanguageEnum};
}) {
  const t = await getTranslator(locale, 'projects');
  return <h1 data-testid='teste_home'>{t('title')}</h1>;
}

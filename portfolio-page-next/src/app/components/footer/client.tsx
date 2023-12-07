'use client';

import {FooterBase} from './footerBase';
import {useTranslation} from '../../i18n/client';
import {LanguageEnum} from '@/types';

export const Footer = ({lng}: {lng: LanguageEnum}) => {
  const {t} = useTranslation(lng, 'footer');
  return <FooterBase t={t} lng={lng} />;
};

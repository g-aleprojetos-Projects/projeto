import {LanguageEnum} from '@/types';
import {useTranslation} from '../../i18n';
import {FooterBase} from './footerBase';

export const Footer = async ({languagem}: {languagem: LanguageEnum}) => {
  const {t} = await useTranslation(languagem, 'footer');
  return <FooterBase t={t} lng={languagem} />;
};

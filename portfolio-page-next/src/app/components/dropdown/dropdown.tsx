'use client';

import Image from 'next/image';
import {useTranslation} from '../../i18n/client';
import {LanguageEnum} from '@/types';
import Link from 'next/link';

interface Props {
  language: LanguageEnum;
  handleOpenDropdown: boolean;
  handleSetOpenDropdown: () => void;
}

export default function Dropdown(props: Props) {
  const {language, handleOpenDropdown, handleSetOpenDropdown} = props;
  const {t} = useTranslation(language, 'header');

  function mudarIdioma(item: LanguageEnum) {
    handleSetOpenDropdown();
  }

  const isDisabled = (lng: string) => lng === language;

  const languages = [
    {
      id: LanguageEnum.en_US,
      label: t('Header.Languages.english'),
      flag: '/icons/flagUSA.svg',
    },
    {
      id: LanguageEnum.fr_FR,
      label: t('Header.Languages.french'),
      flag: '/icons/flagFrance.svg',
    },
    {
      id: LanguageEnum.pt_BR,
      label: t('Header.Languages.portuguese'),
      flag: '/icons/flagBrasil.svg',
    },
  ];

  return (
    <div className='z-10 flex flex-col justify-center '>
      <button
        id='dropdownButton'
        className='inline-flex items-center justify-center py-2.5 text-center text-lg text-gray-400 hover:text-white focus:outline-none'
        type='button'
        onClick={handleSetOpenDropdown}
      >
        {t('Header.language')}
        <Image
          className='relative ml-3'
          src='/icons/seta_baixo.svg'
          alt='Seta para baixo abre dropdown'
          width={15}
          height={15}
          priority
        />
      </button>
      {handleOpenDropdown && (
        <div
          id='dropdown'
          className='w-30 absolute right-6 top-24 z-10 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700'
        >
          <ul
            className='py-2 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdownButton'
          >
            {languages.map(({id, label, flag}) => (
              <li key={id}>
                <Link
                  href={`/${id}`}
                  className={`flex w-full flex-row justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                    isDisabled(id)
                      ? 'cursor-default opacity-50 disabled:pointer-events-none'
                      : ''
                  }`}
                >
                  {label}
                  <Image
                    className='relative ml-3'
                    src={flag}
                    alt={`Flag ${label}`}
                    width={20}
                    height={20}
                    priority
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

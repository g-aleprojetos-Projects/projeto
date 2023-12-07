import Image from 'next/image';
import Link from 'next/link';
import {useTranslation} from '../../i18n';
import {usePathname} from 'next-intl/client';
import Dropdown from '../dropdown';
import {useState} from 'react';
import {LanguageEnum} from '@/types';

export default async function Header({language}: {language: LanguageEnum}) {
  const {t} = await useTranslation(language, 'header');

  return (
    <header>
      <div className='flex flex-row items-center justify-between bg-zinc-800 px-8 py-4'>
        <div>
          <Image
            className='relative'
            src='/icons/logo.svg'
            alt='Logo'
            width={80}
            height={80}
          />
        </div>
        <div className='flex flex-row items-center gap-6'>
          <nav>
            <ul className='flex flex-row items-center gap-6'>
              <li>
                <Link
                  href={`/${language}`}
                  // className={`text-lg ${
                  //   pathname === '/'
                  //     ? 'cursor-default font-bold text-white'
                  //     : 'text-gray-400 hover:text-white'
                  // } `}
                >
                  {t('Navbar.home')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${language}/skills`}
                  // className={`text-lg ${
                  //   pathname === '/skills'
                  //     ? 'cursor-default font-bold text-white'
                  //     : 'text-gray-400 hover:text-white'
                  // } `}
                >
                  {t('Navbar.skills')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${language}/projects`}
                  // className={`text-lg ${
                  //   pathname === '/projects'
                  //     ? 'cursor-default font-bold text-white'
                  //     : 'text-gray-400 hover:text-white'
                  // } `}
                >
                  {t('Navbar.projects')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${language}/about`}
                  // className={`text-lg ${
                  //   pathname === '/about'
                  //     ? 'cursor-default font-bold text-white'
                  //     : 'text-gray-400 hover:text-white'
                  // } `}
                >
                  {t('Navbar.about')}
                </Link>
              </li>
            </ul>
          </nav>
          {/* <Dropdown
            language={language}
            handleOpenDropdown={open}
            handleSetOpenDropdown={toggle}
          /> */}
        </div>
      </div>
    </header>
  );
}

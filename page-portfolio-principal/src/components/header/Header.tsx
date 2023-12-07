import React, {useState} from 'react';
import * as S from './Header.styles';
import {Logo} from 'components/logo';
import {NavBar} from 'components/NavBar';

export const Header = () => {
  const [menuLateral, setMenuLateral] = useState<boolean>(false);

  const handleMudarMenu = () => {
    setMenuLateral(!menuLateral);
  };
  return (
    <S.ContainerHeader data-testid={'test_header'}>
      <S.ContainerPrincipal>
        <S.ContainerLogo>
          <Logo />
        </S.ContainerLogo>
        <S.ContainerNav>
          <NavBar openRightNav={menuLateral} mudarEstado={handleMudarMenu} />
        </S.ContainerNav>
      </S.ContainerPrincipal>
    </S.ContainerHeader>
  );
};

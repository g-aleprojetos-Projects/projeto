import React from 'react';
import logo from 'assets/icon/logo.svg';
import * as S from './Logo.styles';

export const Logo = () => {
  return (
    <S.Container data-testid={'test_container_logo'}>
      <S.Iconelogo data-testid={'teste_logo'} src={logo} />
    </S.Container>
  );
};

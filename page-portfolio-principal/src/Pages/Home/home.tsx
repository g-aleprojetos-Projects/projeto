import React from 'react';
import manutencao from 'assets/image/manutencao.svg';

import * as S from './home.styles';

export const Home = () => {
  return (
    <S.Container data-testid={'teste_home'}>
      <S.Imagem data-testid={'teste_imagem'} src={manutencao} />
    </S.Container>
  );
};

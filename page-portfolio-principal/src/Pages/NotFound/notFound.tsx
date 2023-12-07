import * as React from 'react';
import manutencao from 'assets/image/manutencao.svg';

import * as S from './notFound.styles';

export const NotFound = () => {
  return (
    <S.Container data-testid={'test_notFound'}>
      <S.Imagem data-testid={'test_imagem'} src={manutencao} />
    </S.Container>
  );
};

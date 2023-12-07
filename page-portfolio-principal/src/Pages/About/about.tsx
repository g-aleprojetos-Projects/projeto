import * as React from 'react';
import manutencao from 'assets/image/manutencao.svg';

import * as S from './about.styles';

export const About = () => {
  return (
    <S.Container data-testid={'teste_sobre'}>
      <S.Imagem data-testid={'teste_imagem'} src={manutencao} />
    </S.Container>
  );
};

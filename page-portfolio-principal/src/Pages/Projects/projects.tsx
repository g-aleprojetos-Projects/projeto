import * as React from 'react';
import manutencao from 'assets/image/manutencao.svg';

import * as S from './projects.styles';

export const Projects = () => {
  return (
    <S.Container data-testid={'teste_projetos'}>
      <S.Imagem data-testid={'teste_imagem'} src={manutencao} />
    </S.Container>
  );
};

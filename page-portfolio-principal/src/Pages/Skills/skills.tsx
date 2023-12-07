import * as React from 'react';
import manutencao from 'assets/image/manutencao.svg';

import * as S from './skills.styles';

export const Skills = () => {
  return (
    <S.Container data-testid={'teste_skills'}>
      <S.Imagem data-testid={'teste_imagem'} src={manutencao} />
    </S.Container>
  );
};

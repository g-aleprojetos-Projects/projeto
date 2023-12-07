import React from 'react';
import * as S from './hamburger.styles';
import {useBackgroundContext} from 'context/backgroud';

export interface PropsHumburger {
  openMenu?: boolean;
  mudarEstado: () => void;
}

export const Hamburger = (props: PropsHumburger) => {
  const {temaEscuro: background} = useBackgroundContext();
  const {openMenu = false, mudarEstado} = props;

  return (
    <S.Container data-testid={'test_hamburger'} onClick={mudarEstado}>
      <S.SpanSuperior open={openMenu} backgroundDark={background} />
      <S.SpanMeio open={openMenu} backgroundDark={background} />
      <S.SpanInferior open={openMenu} backgroundDark={background} />
    </S.Container>
  );
};

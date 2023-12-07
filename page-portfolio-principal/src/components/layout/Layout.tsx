import React, {ReactNode} from 'react';
import {Header} from 'components/header';
import * as S from './Layout.styles';
import {useBackgroundContext} from 'context/backgroud';
import {Footer} from 'components/footer';

type ILayout = {
  children: ReactNode;
};

export const Layout = ({children}: ILayout) => {
  const {temaEscuro} = useBackgroundContext();
  return (
    <S.Container backgroundBlack={temaEscuro}>
      <Header />
      <S.ContainerBody>{children}</S.ContainerBody>
      <Footer />
    </S.Container>
  );
};

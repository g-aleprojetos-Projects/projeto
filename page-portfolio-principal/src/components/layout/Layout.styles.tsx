import colors from 'resourses/colors';
import styled from 'styled-components';

export interface Props {
  backgroundBlack: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${props =>
    props.backgroundBlack ? colors.fundoEscuro : colors.lightgray};
`;

export const ContainerBody = styled.main``;

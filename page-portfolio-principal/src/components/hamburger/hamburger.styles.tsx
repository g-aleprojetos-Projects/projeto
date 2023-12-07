import styled from 'styled-components';
import colors from 'resourses/colors';
import sizes from 'resourses/sizes';

export interface Props {
  open?: boolean;
  backgroundDark?: boolean;
}

export const Container = styled.button<Props>`
  display: none;
  position: fixed;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: ${sizes.px34};
  height: ${sizes.px34};
  right: 0;
  margin-right: ${sizes.px34};
  margin-top: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 20;

  @media (max-width: ${sizes.media_768}) {
    display: flex;
  }
`;

const Span = styled.span<Props>`
  width: ${sizes.px34};
  height: ${sizes.px3};
  background-color: ${props =>
    props.backgroundDark ? colors.white : colors.black};
  border-radius: ${sizes.px8};
  transform-origin: ${sizes.px1};
  transition: all 0.3s linear;
`;

export const SpanSuperior = styled(Span)`
  transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
`;

export const SpanMeio = styled(Span)`
  opacity: ${props => (props.open ? 0 : 1)};
`;

export const SpanInferior = styled(Span)`
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
`;

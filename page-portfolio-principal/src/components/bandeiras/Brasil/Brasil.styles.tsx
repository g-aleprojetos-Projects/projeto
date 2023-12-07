import styled from 'styled-components';
import sizes from 'resourses/sizes';
import colors from 'resourses/colors';

export interface PropsBrasil {
  idiomaSelecionado: boolean;
}

export const Container = styled.div<PropsBrasil>`
  display: flex;
  width: ${sizes.px55};
  height: 100%;
  margin: ${sizes.px1} ${sizes.px3};
  cursor: ${props => (props.idiomaSelecionado ? 'default' : 'pointer')};
`;

export const PathVerde = styled.path<PropsBrasil>`
  fill: ${props =>
    props.idiomaSelecionado ? `${colors.verde}` : `${colors.diamont}`};
`;

export const PathAmarelo = styled.path<PropsBrasil>`
  fill: ${props =>
    props.idiomaSelecionado ? `${colors.amarelo}` : `${colors.cinza}`};
`;

export const PathAzul = styled.path<PropsBrasil>`
  fill: ${props =>
    props.idiomaSelecionado ? `${colors.pantone}` : `${colors.cinzento}`};
`;

export const PathBranco = styled.path.attrs({
  fill: `${colors.white}`,
})``;

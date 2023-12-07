import styled from 'styled-components';
import sizes from 'resourses/sizes';
import colors from 'resourses/colors';

export interface PropsUSA {
  idiomaSelecionado: boolean;
}

export const Container = styled.div<PropsUSA>`
  display: flex;
  width: ${sizes.px55};
  height: 100%;
  margin: ${sizes.px1} ${sizes.px3};
  cursor: ${props => (props.idiomaSelecionado ? 'default' : 'pointer')};
`;

export const PathVermelho = styled.path<PropsUSA>`
  fill: ${props =>
    props.idiomaSelecionado ? `${colors.coral}` : `${colors.diamont}`};
`;

export const PathAzul = styled.path<PropsUSA>`
  fill: ${props =>
    props.idiomaSelecionado ? `${colors.pantone}` : `${colors.cinzento}`};
`;

export const PathBranco = styled.path.attrs({
  fill: `${colors.white}`,
})``;

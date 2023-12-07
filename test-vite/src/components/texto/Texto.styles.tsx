import styled from 'styled-components';
import { Props } from '.';
import fontes from '../../resourses/fontes';
import textos from '../../resourses/textos';
import colors from '../../resourses/colors';



export const TextoH1 = styled.h1<Props>`
  font-size: ${props => props.tamanho ?? textos.tamanho.big}px;
  font-family: ${props =>
    props.peso === 'bold' ? fontes.avertaBold : fontes.avertaRegular};
  color: ${props => props.cor ?? colors.white};
  margin-top: ${props => props.marginTop ?? 0}px;
  text-transform: ${props => (props.toUpper ? 'uppercase' : 'none')};
  cursor: ${props => props.cursor ?? 'text'};
`;



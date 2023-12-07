import React from 'react';
import colors from 'resourses/colors';
import fontes from 'resourses/fontes';
import textos from 'resourses/textos';
import styled from 'styled-components';

export type Props = {
  id?: string;
  cor?: string;
  tamanho?: number;
  alturaDeLinha?: number;
  marginTop?: number;
  children?: string | React.ReactNode;
  peso?: 'bold' | 'medium';
  toUpper?: boolean;
  cursor?: 'default' | 'pointer' | 'text';
};

export const TextoStyled = styled.p<Props>`
  font-size: ${props => props.tamanho ?? textos.tamanho.xxsmall}px;
  font-family: ${props =>
    props.peso === 'bold' ? fontes.avertaBold : fontes.avertaRegular};
  color: ${props => props.cor ?? colors.white};
  margin-top: ${props => props.marginTop ?? 0}px;
  text-transform: ${props => (props.toUpper ? 'uppercase' : 'none')};
  cursor: ${props => props.cursor ?? 'text'};
`;


import textos from '../../resourses/textos';
import * as S from './Texto.styles';

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

export function Texto(props: Props) {
  return (
    <S.TextoH1
      tamanho={textos.tamanho.big}
      alturaDeLinha={textos.altura.big}
      {...props}
    />
  );
}


import manutencao from './../assets/images/manutencao.svg';
import * as S from './App.styles';

export function App() {
  return (
    <S.Container data-testid={'pagina-app'}>
      <S.Image
        data-testid={'image-manutencao'}
        src={manutencao}
        alt="Página em Manutenção"
      />
    </S.Container>
  );
}

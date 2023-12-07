import renderer from 'react-test-renderer';
import 'jest-styled-components';
import * as S from '../Texto.styles';
import colors from '../../../resourses/colors';

describe('Texto.styles', () => {

  test('TextoH1 DEVE ser igual ao snapshot', () => {
    const texto = renderer.create(<S.TextoH1>Teste</S.TextoH1>).toJSON();

    expect(texto).toMatchSnapshot();
  });

  test(`TextoH1 DEVE ter a cor igual a "##000000" QUANDO a propriedade cor informada for "${colors.black}"`, () => {
    const texto = renderer
      .create(<S.TextoH1 cor={colors.black}>Teste</S.TextoH1>)
      .toJSON();
    console.log(texto)
    expect(texto).toHaveStyleRule('color', '#000000');
  });
});

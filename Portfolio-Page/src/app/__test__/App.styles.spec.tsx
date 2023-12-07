import renderer from 'react-test-renderer';
import 'jest-styled-components';
import * as S from '../App.styles';

describe('App.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('Image DEVE ser igual ao snapshot', () => {
    const image = renderer.create(<S.Image />).toJSON();
    expect(image).toMatchSnapshot();
  });
});

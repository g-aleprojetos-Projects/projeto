import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './USA.styles';

describe('USA.styles', () => {
  test('Container DEVE ser igual ao snapshot QUANDO "idiomaSelecionado" for igual a false', () => {
    const container = renderer
      .create(<S.Container idiomaSelecionado={false} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });

  test('Container DEVE ser igual ao snapshot QUANDO "idiomaSelecionado" for igual a true', () => {
    const container = renderer
      .create(<S.Container idiomaSelecionado={true} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });

  test('PathVermelho DEVE ser igual ao snapshot QUANDO "idiomaSelecionado" for igual a false', () => {
    const container = renderer
      .create(<S.PathVermelho idiomaSelecionado={false} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });

  test('PathVermelho DEVE ser igual ao snapshot QUANDO "idiomaSelecionado" for igual a true', () => {
    const container = renderer
      .create(<S.PathVermelho idiomaSelecionado={true} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });

  test('PathAzul DEVE ser igual ao snapshot QUANDO "idiomaSelecionado" for igual a false', () => {
    const container = renderer
      .create(<S.PathAzul idiomaSelecionado={false} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });

  test('PathAzul DEVE ser igual ao snapshot QUANDO "idiomaSelecionado" for igual a true', () => {
    const container = renderer
      .create(<S.PathAzul idiomaSelecionado={true} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });

  test('PathBranco DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.PathBranco />).toJSON();
    expect(container).toMatchSnapshot();
  });
});

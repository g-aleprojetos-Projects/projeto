import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './Brasil.styles';

describe('Brasil.styles', () => {
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

  test('PathVerde DEVE ser igual ao snapshot QUANDO "idiomaSelecionado" for igual a false', () => {
    const container = renderer
      .create(<S.PathVerde idiomaSelecionado={false} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });

  test('PathVerde DEVE ser igual ao snapshot QUANDO "idiomaSelecionado" for igual a true', () => {
    const container = renderer
      .create(<S.PathVerde idiomaSelecionado={true} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });

  test('PathAmarelo DEVE ser igual ao snapshot QUANDO "idiomaSelecionado" for igual a false', () => {
    const container = renderer
      .create(<S.PathAmarelo idiomaSelecionado={false} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });

  test('PathAmarelo DEVE ser igual ao snapshot QUANDO "idiomaSelecionado" for igual a true', () => {
    const container = renderer
      .create(<S.PathAmarelo idiomaSelecionado={true} />)
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

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './webRotas.styles';

describe('Sobre.styles', () => {
  test('Container DEVE ser igual ao snapshot QUANDO "backgroundBlack" quando for true.', () => {
    const container = renderer
      .create(<S.Container backgroundBlack={true} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });
  test('Image DEVE ser igual ao snapshot QUANDO "backgroundBlack" quando for false.', () => {
    const container = renderer
      .create(<S.Container backgroundBlack={false} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });
});

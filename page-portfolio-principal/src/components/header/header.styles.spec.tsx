import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './Header.styles';

describe('Header.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerHeader />).toJSON();
    expect(container).toMatchSnapshot();
  });

  test('Overlay DEVE ser igual ao snapshot', () => {
    const overlay = renderer.create(<S.ContainerPrincipal />).toJSON();
    expect(overlay).toMatchSnapshot();
  });

  test('Content DEVE ser igual ao snapshot', () => {
    const content = renderer.create(<S.ContainerContent />).toJSON();
    expect(content).toMatchSnapshot();
  });
});

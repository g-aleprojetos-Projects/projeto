import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import logo from 'assets/icon/logo.svg';
import * as S from './Logo.styles';

describe('Logo.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('Iconelogo DEVE ser igual ao snapshot', () => {
    const iconelogo = renderer.create(<S.Iconelogo src={logo} />).toJSON();
    expect(iconelogo).toMatchSnapshot();
  });
});

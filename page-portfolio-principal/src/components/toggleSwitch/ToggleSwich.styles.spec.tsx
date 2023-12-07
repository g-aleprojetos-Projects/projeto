import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './ToggleSwitch.styles';

describe('ToggleSwitch.styles', () => {
  test('ToggleSwitchWrapper DEVE ser igual ao snapshot quando isOn for "true"', () => {
    const containerNav = renderer
      .create(<S.ToggleSwitchWrapper isOn={true} />)
      .toJSON();
    expect(containerNav).toMatchSnapshot();
  });

  test('ToggleSwitchWrapper DEVE ser igual ao snapshot quando isOn for "false"', () => {
    const containerNav = renderer
      .create(<S.ToggleSwitchWrapper isOn={false} />)
      .toJSON();
    expect(containerNav).toMatchSnapshot();
  });

  test('Span DEVE ser igual ao snapshot', () => {
    const containerNav = renderer.create(<S.Span />).toJSON();
    expect(containerNav).toMatchSnapshot();
  });

  test('SpanBack DEVE ser igual ao snapshot quando isOn for "true"', () => {
    const containerNav = renderer.create(<S.SpanBack isOn={true} />).toJSON();
    expect(containerNav).toMatchSnapshot();
  });

  test('SpanBack DEVE ser igual ao snapshot quando isOn for "false"', () => {
    const containerNav = renderer.create(<S.SpanBack isOn={false} />).toJSON();
    expect(containerNav).toMatchSnapshot();
  });

  test('Input DEVE ser igual ao snapshot', () => {
    const containerNav = renderer.create(<S.Input />).toJSON();
    expect(containerNav).toMatchSnapshot();
  });
});

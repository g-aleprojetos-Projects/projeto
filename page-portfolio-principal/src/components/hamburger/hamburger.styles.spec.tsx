import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './hamburger.styles';

describe('Hamburger.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();
    expect(container).toMatchSnapshot();
  });

  test('SpanSuperior DEVE ser igual ao snapshot', () => {
    const spanSuperior = renderer.create(<S.SpanSuperior />).toJSON();
    expect(spanSuperior).toMatchSnapshot();
  });

  test('SpanSuperior DEVE ser igual ao snapshot QUANDO "open" for "true" e "backgroumdDark" for false', () => {
    const spanSuperior = renderer
      .create(<S.SpanSuperior open={true} backgroundDark={false} />)
      .toJSON();
    expect(spanSuperior).toMatchSnapshot();
  });

  test('SpanSuperior DEVE ser igual ao snapshot QUANDO "open" for "true" e "backgroumdDark" for true', () => {
    const spanSuperior = renderer
      .create(<S.SpanSuperior open={true} backgroundDark={true} />)
      .toJSON();
    expect(spanSuperior).toMatchSnapshot();
  });

  test('SpanMeio DEVE ser igual ao snapshot', () => {
    const spanMeio = renderer.create(<S.SpanMeio />).toJSON();
    expect(spanMeio).toMatchSnapshot();
  });

  test('SpanMeio DEVE ser igual ao snapshot QUANDO "open" for "true" e "backgroumdDark" for false', () => {
    const spanMeio = renderer
      .create(<S.SpanMeio open={true} backgroundDark={false} />)
      .toJSON();
    expect(spanMeio).toMatchSnapshot();
  });

  test('SpanMeio DEVE ser igual ao snapshot QUANDO "open" for "true" e "backgroumdDark" for true', () => {
    const spanMeio = renderer
      .create(<S.SpanMeio open={true} backgroundDark={true} />)
      .toJSON();
    expect(spanMeio).toMatchSnapshot();
  });

  test('SpanInferior DEVE ser igual ao snapshot', () => {
    const spanInferior = renderer.create(<S.SpanInferior />).toJSON();
    expect(spanInferior).toMatchSnapshot();
  });

  test('SpanInferior DEVE ser igual ao snapshot QUANDO "open" for "true" e "backgroumdDark" for "false"', () => {
    const spanInferior = renderer
      .create(<S.SpanInferior open={true} backgroundDark={false} />)
      .toJSON();
    expect(spanInferior).toMatchSnapshot();
  });

  test('SpanInferior DEVE ser igual ao snapshot QUANDO "open" for "true" e "backgroumdDark" for "true"', () => {
    const spanInferior = renderer
      .create(<S.SpanInferior open={true} backgroundDark={true} />)
      .toJSON();
    expect(spanInferior).toMatchSnapshot();
  });
});

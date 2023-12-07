import React, {ReactNode} from 'react';
import {act, renderHook} from '@testing-library/react-hooks';
import {BackgroundProvide, useBackgroundContext} from './BackgroundContext';

type BackgroundProvider = {
  children: ReactNode;
};

const BackgroundContextProvider = ({children}: BackgroundProvider) => (
  <BackgroundProvide>{children}</BackgroundProvide>
);

const wrapper = ({children}: BackgroundProvider) => (
  <BackgroundContextProvider>{children}</BackgroundContextProvider>
);

describe('BackgroundContext', () => {
  test('DEVE ter o estado mobile igual a false', () => {
    const {result} = renderHook(() => useBackgroundContext(), {wrapper});

    expect(result.current.temaEscuro).toBeFalsy();
  });

  test('DEVE ter o estado mobile igual a false', async () => {
    const {result} = renderHook(() => useBackgroundContext(), {wrapper});

    await act(async () => {
      result.current.handleToggle();
    });

    expect(result.current.temaEscuro).toBe(true);
  });
});

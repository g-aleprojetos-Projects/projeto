import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {ToggleSwitch} from './ToggleSwitch';

describe('ToggleSwich', () => {
  let componente: RenderResult;
  const aoClicarMock = jest.fn();

  beforeEach(() => {
    componente = render(
      <ToggleSwitch isOn={false} handleOnclick={aoClicarMock} />,
    );
  });
  describe('Renderização', () => {
    test(`DEVE renderizar o componente ToggleSwich`, () => {
      const toggleSwich = componente.getByTestId('test_toggleSwitch');
      expect(toggleSwich).toBeDefined();
    });
    test(`DEVE renderizar com o "ToggleSwitchWrapper" com o "backGroundMoon" QUANDO "isOn" forigual a false`, () => {
      const toggleSwich = componente.getByTestId('test_toggleSwitch');
      const style = window.getComputedStyle(toggleSwich);
      expect(style.background).toEqual('url(backgroundMoon.svg)');
    });
    test(`DEVE renderizar com o "SpanBack" com o "stars" QUANDO "isOn" forigual a false `, () => {
      const toggleSwich = componente.getByTestId('test_toggleSwitch_icon');
      const style = window.getComputedStyle(toggleSwich);
      expect(style.background).toEqual('url(stars.svg)');
    });
    describe('Qunado isOn fr igual a true', () => {
      beforeEach(() => {
        componente.rerender(
          <ToggleSwitch isOn={true} handleOnclick={aoClicarMock} />,
        );
      });
      test(`DEVE renderizar com o "ToggleSwitchWrapper" com o "backGroundSun" QUANDO "isOn" forigual a true `, () => {
        const toggleSwich = componente.getByTestId('test_toggleSwitch');
        const style = window.getComputedStyle(toggleSwich);
        expect(style.background).toEqual('url(backgroundSun.svg)');
      });
      test(`DEVE renderizar com o "SpanBack" com o "clouds" QUANDO "isOn" forigual a true `, () => {
        const toggleSwich = componente.getByTestId('test_toggleSwitch_icon');
        const style = window.getComputedStyle(toggleSwich);
        expect(style.background).toEqual('url(clouds.svg)');
      });
    });
  });
  describe('Comportamento', () => {
    test(`DEVE chamar a função QUANDO clicar no ToggleSwich `, () => {
      const toggleSwich = componente.getByTestId('test_toggleSwitch');

      fireEvent.click(toggleSwich);

      expect(aoClicarMock).toBeCalled();
    });
  });
});

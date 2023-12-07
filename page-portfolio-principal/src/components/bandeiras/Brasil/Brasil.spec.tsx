import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {BandeiraBrasil} from './Brasil';

describe('Bandeira do Brasil', () => {
  const aoClicarMock = jest.fn();
  const setup = () =>
    render(
      <BandeiraBrasil idiomaSelecionado={false} mudarIdioma={aoClicarMock} />,
    );

  describe('Renderização', () => {
    test(`DEVE renderizar o componente BandeiraBrasil`, () => {
      setup();
      const bandeiraBrasil = screen.getByTestId('test_flag_Brasil');
      expect(bandeiraBrasil).toBeDefined();
    });
  });
  describe('Comportamento', () => {
    test(`DEVE chamar a função QUANDO clicar no BandeiraBrasil `, () => {
      setup();
      const bandeiraBrasil = screen.getByTestId('test_flag_Brasil');

      fireEvent.click(bandeiraBrasil);

      expect(aoClicarMock).toBeCalled();
    });
  });
});

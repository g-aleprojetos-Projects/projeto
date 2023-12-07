import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {BandeiraUSA} from './USA';

describe('Bandeira do USA', () => {
  const aoClicarMock = jest.fn();
  const setup = () =>
    render(
      <BandeiraUSA idiomaSelecionado={false} mudarIdioma={aoClicarMock} />,
    );

  describe('Renderização', () => {
    test(`DEVE renderizar o componente BandeiraUSA`, () => {
      setup();
      const bandeiraUSA = screen.getByTestId('test_flag_USA');
      expect(bandeiraUSA).toBeDefined();
    });
  });
  describe('Comportamento', () => {
    test(`DEVE chamar a função QUANDO clicar no BandeiraUSA `, () => {
      setup();
      const bandeiraUSA = screen.getByTestId('test_flag_USA');

      fireEvent.click(bandeiraUSA);

      expect(aoClicarMock).toBeCalled();
    });
  });
});

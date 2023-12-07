import React from 'react';
import {render, screen} from '@testing-library/react';
import {Logo} from './Logo';

describe('Logo', () => {
  const setup = () => render(<Logo />);

  describe('Renderização', () => {
    test(`DEVE renderizar o Logo`, () => {
      setup();
      const logo = screen.findByTestId('teste_logo');
      expect(logo).toBeDefined();
    });
  });
});

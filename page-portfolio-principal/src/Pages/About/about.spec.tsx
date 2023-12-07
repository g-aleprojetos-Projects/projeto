import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {About} from './about';

describe('About', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<About />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "Home"`, () => {
      const home = componente.getByTestId('teste_sobre');
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = componente.findByTestId('teste_imagem');
      expect(imagem).toBeDefined();
    });
  });
});

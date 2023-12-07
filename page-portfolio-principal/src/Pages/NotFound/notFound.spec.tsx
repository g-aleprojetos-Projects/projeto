import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {NotFound} from './notFound';

describe('NotFound', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<NotFound />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "NotFound"`, () => {
      const notFound = componente.getByTestId('test_notFound');
      expect(notFound).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = componente.findByTestId('teste_imagem');
      expect(imagem).toBeDefined();
    });
  });
});

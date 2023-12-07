import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {Projects} from './projects';

describe('Projects', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<Projects />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "Projetos"`, () => {
      const projetos = componente.getByTestId('teste_projetos');
      expect(projetos).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = componente.findByTestId('teste_imagem');
      expect(imagem).toBeDefined();
    });
  });
});

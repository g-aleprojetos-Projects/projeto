import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {Skills} from './skills';

describe('Skills', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<Skills />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "Skills"`, () => {
      const skills = componente.getByTestId('teste_skills');
      expect(skills).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = componente.findByTestId('teste_imagem');
      expect(imagem).toBeDefined();
    });
  });
});

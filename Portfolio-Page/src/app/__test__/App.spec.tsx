import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {App} from '..';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "App"`, () => {
      const app = screen.getByTestId('pagina-app');
      expect(app).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = screen.getByTestId('image-manutencao');
      expect(imagem).toBeDefined();
    });

    test(`DEVE renderizar o texto alt da imagem da pagina`, async () => {
      const imagem = screen.getByTestId('image-manutencao');
      expect(imagem).toHaveAttribute('alt', 'Página em Manutenção');
    });
  });
});

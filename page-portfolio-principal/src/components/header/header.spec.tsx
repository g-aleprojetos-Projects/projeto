import React from 'react';
import {render, screen} from '@testing-library/react';
import {useNavigate} from 'react-router-dom';
import {Header} from './Header';

jest.mock('react-router-dom');
const mockedUseNavigate = useNavigate as jest.Mock;

describe('Hender', () => {
  const setup = () => render(<Header />);

  beforeEach(() => {
    mockedUseNavigate.mockReturnValue(jest.fn());
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o componente Hender`, () => {
      setup();
      const header = screen.getByTestId('test_header');
      expect(header).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "Home"`, () => {
      setup();
      const home = screen.getByText(/Home/i);
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "Skills"`, () => {
      setup();
      const skills = screen.getByText(/Skills/i);
      expect(skills).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "Projects"`, () => {
      setup();
      const projetos = screen.getByText(/Projects/i);
      expect(projetos).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "About Us"`, () => {
      setup();
      const sobre = screen.getByText(/About Us/i);
      expect(sobre).toBeDefined();
    });
    test(`DEVE renderizar o header com o "flagBrasil"`, () => {
      setup();
      const flag = screen.getByTestId('test_flag_Brasil');
      expect(flag).toBeDefined();
    });
    test(`DEVE renderizar o header com o "vídeo"`, () => {
      setup();
      const video = screen.getByTestId('test_video');
      expect(video).toBeDefined();
    });
  });
});

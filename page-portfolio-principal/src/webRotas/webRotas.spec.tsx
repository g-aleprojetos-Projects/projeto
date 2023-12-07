import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {WebRotas} from './webRotas';
import rotas from 'resourses/rotas';

describe('WebRotas', () => {

  const setup = () =>
    render(
      <MemoryRouter initialEntries={[`/${rotas.Home}`]}>
        <WebRotas />
      </MemoryRouter>,
    );

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "WebRotas"`, () => {
      setup();
      const webRotas = screen.getByTestId('test_web');
      expect(webRotas).toBeDefined();
    });
    test(`DEVE renderizar o "Header"`, () => {
      setup();
      const webRotas = screen.getByTestId('test_header');
      expect(webRotas).toBeDefined();
    });
  });

  describe('Rotas', () => {
    test('Home', () => {
      setup();
      const home = screen.getByTestId('teste_home');
      expect(home).toBeDefined();
    });

    test('Skills', () => {
      setup();
      const navSkills = screen.getByText('Skills');
      fireEvent.click(navSkills);
      const skills = screen.getByTestId('teste_skills');
      expect(skills).toBeDefined();
    });

    test('Projects', () => {
      setup();
      const navProjetos = screen.getByText('Projects');
      fireEvent.click(navProjetos);
      const projetos = screen.getByTestId('teste_projetos');
      expect(projetos).toBeDefined();
    });

    test('About Us', () => {
      setup();
      const navSobre = screen.getByText('About Us');
      fireEvent.click(navSobre);
      const sobre = screen.getByTestId('teste_sobre');
      expect(sobre).toBeDefined();
    });
  });
});

import React from 'react';
import {fireEvent, render, waitFor, screen} from '@testing-library/react';
import {NavBar} from './NavBar';
import {useBackgroundContext} from 'context/backgroud';
import {useNavigate} from 'react-router-dom';

jest.mock('react-router-dom');
const mockedUseNavigate = useNavigate as jest.Mock;

jest.mock('context/backgroud');
const mockedUseBackgroundContext = useBackgroundContext as jest.Mock;

describe('RightNav', () => {
  const aoClicarMock = jest.fn();
  const setup = () =>
    render(<NavBar openRightNav={true} mudarEstado={aoClicarMock} />);

  beforeEach(() => {
    mockedUseNavigate.mockReturnValue(jest.fn());
    mockedUseBackgroundContext.mockReturnValue({
      handleToggle: jest.fn(),
      temaEscuro: false,
    });
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o componente com o texto "Menu"`, () => {
      setup();
      const menu = screen.getByText('Menu');
      expect(menu).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "Menu" com font-family igual "AvertaStd-Regular" `, () => {
      setup();
      const menu = screen.getByText('Menu');
      const style = window.getComputedStyle(menu);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });

    test(`DEVE renderizar o componente com o texto "Home"`, () => {
      setup();
      const home = screen.getByText('Home');
      expect(home).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "Home" com font-family igual "AvertaStd-Semibold" `, async () => {
      setup();
      await waitFor(async () => {
        const home = screen.getByText('Home');
        const style = window.getComputedStyle(home);
        expect(style.fontFamily).toEqual('AvertaStd-Bold');
      });
    });

    test(`DEVE renderizar o componente com o texto "Skills"`, () => {
      setup();
      const skills = screen.getByText('Skills');
      expect(skills).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "Skills" com font-family igual "AvertaStd-Regular" `, () => {
      setup();
      const skills = screen.getByText('Skills');
      const style = window.getComputedStyle(skills);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });

    test(`DEVE renderizar o componente com o texto "Projects"`, () => {
      setup();
      const projetos = screen.getByText('Projects');
      expect(projetos).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "Projects" com font-family igual "AvertaStd-Regular" `, () => {
      setup();
      const projetos = screen.getByText('Projects');
      const style = window.getComputedStyle(projetos);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });

    test(`DEVE renderizar o componente com o texto "About Us"`, () => {
      setup();
      const sobre = screen.getByText('About Us');
      expect(sobre).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "About Us" com font-family igual "AvertaStd-Regular" `, () => {
      setup();
      const sobre = screen.getByText('About Us');
      const style = window.getComputedStyle(sobre);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });

    test(`DEVE renderizar o componente com o componente "ToggleSwitch"`, () => {
      setup();
      const toggleSwitch = screen.getByTestId('test_toggleSwitch');
      expect(toggleSwitch).toBeDefined();
    });

    test(`DEVE renderizar o componente com a bandeira do "Brasil"`, () => {
      setup();
      const bandeira = screen.getByTestId('test_flag_Brasil');
      expect(bandeira).toBeDefined();
    });

    test(`DEVE renderizar o componente com a bandeira do "Estados Unidos"`, () => {
      setup();
      const bandeira = screen.getByTestId('test_flag_USA');
      expect(bandeira).toBeDefined();
    });

    test(`NÃO DEVE renderizar menu lateral QUANDO "openRightNav" for false`, () => {
      render(<NavBar openRightNav={false} mudarEstado={aoClicarMock} />);
      const toggleSwich = screen.queryByTestId('test_rightNav_container');

      expect(toggleSwich).toBeNull();
    });
  });

  describe('Comportamento', () => {
    describe('Mudar de idioma', () => {
      test(`DEVE mudar o texto de "Home" para "Pagina Inicial" QUANDO clicar no ícone do "Brasil"`, () => {
        setup();
        const flagBrasil = screen.getByTestId('test_flag_Brasil');

        fireEvent.click(flagBrasil);
        const paginaInicial = screen.getByText(/Pagina Inicial/i);
        expect(paginaInicial).toBeDefined();
      });

      test(`DEVE mudar o texto de "Skills" para "Tecnologias" QUANDO clicar no ícone do "Brasil"`, () => {
        setup();
        const flagBrasil = screen.getByTestId('test_flag_Brasil');

        fireEvent.click(flagBrasil);
        const tecnologias = screen.getByText(/Tecnologias/i);
        expect(tecnologias).toBeDefined();
      });

      test(`DEVE mudar o texto de "Projects" para "Projetos" QUANDO clicar no ícone do "Brasil"`, () => {
        setup();
        const flagBrasil = screen.getByTestId('test_flag_Brasil');

        fireEvent.click(flagBrasil);
        const projetos = screen.getByText(/Projetos/i);
        expect(projetos).toBeDefined();
      });

      test(`DEVE mudar o texto de "About Us" para "Sobre" QUANDO clicar no ícone do "Brasil"`, () => {
        setup();
        const flagBrasil = screen.getByTestId('test_flag_Brasil');

        fireEvent.click(flagBrasil);
        const sobre = screen.getByText(/Sobre/i);
        expect(sobre).toBeDefined();
      });

      test(`DEVE voltar para o texto de "Home" QUANDO clicar no icone do "Brasil e depois no icone "USA"`, () => {
        setup();
        const flagBrasil = screen.getByTestId('test_flag_Brasil');
        fireEvent.click(flagBrasil);
        const flagUSA = screen.getByTestId('test_flag_USA');
        fireEvent.click(flagUSA);
        const sobre = screen.getByText(/Home/i);
        expect(sobre).toBeDefined();
      });
    });
    describe('Navegação', () => {
      test(`DEVE chamar a função QUANDO clicar no "Home" no menu da navegação`, () => {
        setup();
        const home = screen.getByText('Home');
        fireEvent.click(home);

        expect(aoClicarMock).toBeCalled();
      });

      test(`DEVE chamar a função QUANDO clicar no "Skills" no menu da navegação`, () => {
        setup();
        const skills = screen.getByText('Skills');
        fireEvent.click(skills);

        expect(aoClicarMock).toBeCalled();
      });

      test(`DEVE chamar a função QUANDO clicar no "Projects" no menu da navegação`, () => {
        setup();
        const projetos = screen.getByText('Projects');
        fireEvent.click(projetos);

        expect(aoClicarMock).toBeCalled();
      });

      test(`DEVE chamar a função QUANDO clicar no "About Us" no menu da navegação`, () => {
        setup();
        const sobre = screen.getByText('About Us');
        fireEvent.click(sobre);

        expect(aoClicarMock).toBeCalled();
      });
    });

    test(`DEVE renderizar o componente com o texto "Home" com font-family igual "AvertaStd-Regular`, () => {
      setup();
      const navSkills = screen.getByText('Skills');
      fireEvent.click(navSkills);
      const home = screen.getByText('Home');
      const style = window.getComputedStyle(home);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });

    test(`DEVE renderizar o componente com o texto "Skills" com font-family igual "AvertaStd-Regular`, () => {
      setup();
      const navSkills = screen.getByText('Skills');
      fireEvent.click(navSkills);
      const skills = screen.getByText('Skills');
      const style = window.getComputedStyle(skills);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE renderizar o componente com o texto "Projects" com font-family igual "AvertaStd-Regular`, () => {
      setup();
      const navProjetos = screen.getByText('Projects');
      fireEvent.click(navProjetos);
      const projetos = screen.getByText('Projects');
      const style = window.getComputedStyle(projetos);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE renderizar o componente com o texto "About Us" com font-family igual "AvertaStd-Regular`, () => {
      setup();
      const navSobre = screen.getByText('About Us');
      fireEvent.click(navSobre);
      const sobre = screen.getByText('About Us');
      const style = window.getComputedStyle(sobre);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE chamar a função "handleToggleSwich" QUANDO clicar no "ToggleSwitch" no menu da navegação`, () => {
      setup();
      const toggleSwich = screen.getByTestId('test_toggleSwitch');
      fireEvent.click(toggleSwich);

      expect(useBackgroundContext().handleToggle).toBeCalled();
    });

    test(`DEVE chamar a função "mudarEstado" QUANDO clicar no "ToggleSwitch" no menu da navegação`, () => {
      setup();
      const toggleSwich = screen.getByTestId('test_toggleSwitch');
      fireEvent.click(toggleSwich);

      expect(aoClicarMock).toBeCalled();
    });

    test(`DEVE chamar a função "mudarEstado" QUANDO clicar fora do menu`, () => {
      setup();
      const toggleSwich = screen.getByTestId('test_rightNav_container');
      fireEvent.click(toggleSwich);

      expect(aoClicarMock).toBeCalled();
    });

    test(`DEVE renderizar com o "ToggleSwitch" como o "backGroundMoon" `, () => {
      setup();
      const toggleSwich = screen.getByTestId('test_toggleSwitch');
      const style = window.getComputedStyle(toggleSwich);
      expect(style.background).toEqual('url(backgroundMoon.svg)');
    });

    test(`DEVE renderizar com o "ToggleSwitch" como o "clouds" `, () => {
      mockedUseBackgroundContext.mockReturnValue({
        handleToggle: jest.fn(),
        temaEscuro: true,
      });
      render(<NavBar openRightNav={true} mudarEstado={aoClicarMock} />);

      const toggleSwich = screen.getByTestId('test_toggleSwitch_icon');
      const style = window.getComputedStyle(toggleSwich);
      expect(style.background).toEqual('url(clouds.svg)');
    });
  });
});

import * as React from 'react';
import {Home} from 'Pages/Home';
import {Projects} from 'Pages/Projects';
import {Skills} from 'Pages/Skills';
import {About} from 'Pages/About';
import {NotFound} from 'Pages/NotFound';
import {Routes, Route} from 'react-router-dom';
import rotas from 'resourses/rotas';
import * as S from './webRotas.styles';

export const WebRotas = () => {
  return (
    <S.Container data-testid={'test_web'}>
      <Routes>
        <Route path={rotas.Home} element={<Home />} />
        <Route path={rotas.Projects} element={<Projects />} />
        <Route path={rotas.Skills} element={<Skills />} />
        <Route path={rotas.About} element={<About />} />
        <Route path={rotas.NotFound} element={<NotFound />} />
      </Routes>
    </S.Container>
  );
};

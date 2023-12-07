import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './NavBar.styles';

describe('RightNav.styles', () => {
  test('ContainerNav DEVE ser igual ao snapshot', () => {
    const containerNav = renderer.create(<S.ContainerNav />).toJSON();
    expect(containerNav).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot QUANDO "openRightNav" for false e "backgroundDark" for false.', () => {
    const containerContent = renderer
      .create(
        <S.ContainerContent openRightNav={false} backgroundDark={false} />,
      )
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot QUANDO "openRightNav" for false e "backgroundDark" for true.', () => {
    const containerContent = renderer
      .create(<S.ContainerContent openRightNav={false} backgroundDark={true} />)
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot QUANDO "openRightNav" for true e "backgroundDark" for false.', () => {
    const containerContent = renderer
      .create(<S.ContainerContent openRightNav={true} backgroundDark={false} />)
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot QUANDO "openRightNav" for true e "backgroundDark" for true.', () => {
    const containerContent = renderer
      .create(<S.ContainerContent openRightNav={true} backgroundDark={true} />)
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });

  test('Texto DEVE ser igual ao snapshot', () => {
    const texto = renderer.create(<S.Texto />).toJSON();
    expect(texto).toMatchSnapshot();
  });
  test('Menu DEVE ser igual ao snapshot ', () => {
    const menu = renderer.create(<S.Menu />).toJSON();
    expect(menu).toMatchSnapshot();
  });

  test('Item DEVE ser igual ao snapshot.', () => {
    const item = renderer.create(<S.Item />).toJSON();
    expect(item).toMatchSnapshot();
  });
  test('ItemNav DEVE ser igual ao snapshot QUANDO "isActive" for false.', () => {
    const item = renderer.create(<S.Item isActive={false} />).toJSON();
    expect(item).toMatchSnapshot();
  });
  test('ItemNav DEVE ser igual ao snapshot QUANDO "isActive" for true.', () => {
    const item = renderer.create(<S.Item isActive={true} />).toJSON();
    expect(item).toMatchSnapshot();
  });
  test('Flag DEVE ser igual ao snapshot.', () => {
    const flag = renderer.create(<S.Flag />).toJSON();
    expect(flag).toMatchSnapshot();
  });
});

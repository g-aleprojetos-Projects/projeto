import styled from 'styled-components';
import sizes from 'resourses/sizes';
import colors from 'resourses/colors';

export interface PropsRightNav {
  openRightNav?: boolean;
  backgroundDark?: boolean;
  isActive?: boolean;
  idiomaSelecionado?: boolean;
}

export const Container = styled.div`
  display: 'none';

  @media screen and (max-width: ${sizes.media_768}) {
    display: flex;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const ContainerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${sizes.px89};
  padding-right: ${sizes.px55};
`;

export const ContainerContent = styled.ul<PropsRightNav>`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  position: static;
  background-color: 'transparent';
  transform: 'none';
  top: 'auto';
  right: 'auto';
  width: 'auto';
  height: auto;
  padding-top: 'auto';
  transition: 'none';

  @media screen and (max-width: ${sizes.media_768}) {
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    background-color: ${colors.black};
    transform: ${props =>
      props.openRightNav ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    width: 100vw;
    padding-top: 3.5rem;
    transition: 'transform 0.3s ease-in-out';
  }
`;

export const Texto = styled.div`
  color: ${colors.white};
`;

export const Menu = styled.div`
  display: none;

  @media screen and (max-width: ${sizes.media_768}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    margin-bottom: 10px;
    background-color: ${colors.tropicalRainForest};
  }
`;

export const Item = styled.li<PropsRightNav>`
  display: flex;
  justify-content: center;
  padding: ${sizes.px8}px;
  margin: ${sizes.px5} ${sizes.px21};
  color: ${colors.white};

  @media screen and (max-width: ${sizes.media_768}) {
    padding: ${sizes.px8}px 0;
  }
`;

export const ItemNav = styled(Item)`
  width: 100%;
  white-space: nowrap;
  cursor: ${props => (props.isActive ? 'default' : 'pointer')};
  :hover {
    background-color: 'none';
  }

  @media screen and (max-width: ${sizes.media_768}) {
    :hover {
      background-color: ${props =>
        props.isActive ? 'none' : colors.blueMagenta};
    }
  }
`;

export const Flag = styled.li`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: ${sizes.media_768}) {
    flex-direction: column;
    margin: ${sizes.px5};
  }
`;

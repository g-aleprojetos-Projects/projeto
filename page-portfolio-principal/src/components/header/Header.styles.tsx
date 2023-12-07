import styled from 'styled-components';
import colors from '../../resourses/colors';
import sizes from 'resourses/sizes';

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  height: ${sizes.px144};
  padding-bottom: ${sizes.px5};
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: ${sizes.px144};
  background-color: ${colors.black50per};

  @media (max-width: ${sizes.media_768}) {
    display: none;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: ${sizes.px34};
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  padding: ${`0 ${sizes.px8} 0 ${sizes.px89}`};

  @media screen and (max-width: ${sizes.media_768}) {
    position: fixed;
    padding: 0px;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-right: ${sizes.px21};
`;

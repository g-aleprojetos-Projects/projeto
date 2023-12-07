import styled from 'styled-components';
import colors from 'resourses/colors';
import sizes from 'resourses/sizes';

export interface PropsItemNavBar {
  openRightNav?: boolean;
  isActive?: boolean;
}

export const ContainerItem = styled.div<PropsItemNavBar>`
  display: flex;
  justify-items: center;
  height: ${sizes.px21};
  border-bottom: ${props =>
    props.isActive ? `${sizes.px2} solid ${colors.white}` : 'none'};
`;

export const Item = styled.li<PropsItemNavBar>`
  display: flex;
  justify-content: center;
  padding: ${sizes.px8}px;
  margin: ${sizes.px5} ${sizes.px21};
  color: ${colors.white};
`;

export const ItemNav = styled(Item)`
  width: 100%;
  white-space: nowrap;
  cursor: ${props => (props.isActive ? 'default' : 'pointer')};
  :hover {
    background-color: 'none';
  }
`;

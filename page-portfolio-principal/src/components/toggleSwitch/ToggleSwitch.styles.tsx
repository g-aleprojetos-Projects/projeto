import styled from 'styled-components';
import sizes from 'resourses/sizes';
import backGroundMoon from 'assets/icon/toggleMoon/backgroundMoon.svg';
import moon from 'assets/icon/toggleMoon/moon.svg';
import stars from 'assets/icon/toggleMoon/stars.svg';
import backGroundSun from 'assets/icon/toggleSun/backgroundSun.svg';
import sun from 'assets/icon/toggleSun/sun.svg';
import clouds from 'assets/icon/toggleSun/clouds.svg';

export interface PropsToggle {
  isOn: boolean;
}

export const ToggleSwitchWrapper = styled.label<PropsToggle>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 1.9rem;
  border-radius: 2rem;
  background: url(${props => (props.isOn ? backGroundSun : backGroundMoon)});
  background-size: cover;
`;

export const Span = styled.span`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  left: 0;
  cursor: pointer;
  transition: 0.25s;
  background: url(${moon});
  background-size: cover;
`;
export const SpanBack = styled.span<PropsToggle>`
  position: absolute;
  width: ${sizes.px21};
  height: ${sizes.px21};
  right: ${props => (props.isOn ? sizes.px34 : sizes.px8)};
  cursor: pointer;
  transition: 0.25s;
  background: url(${props => (props.isOn ? clouds : stars)});
  background-size: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;

  :checked + Span {
    left: 50%;
    background: url(${sun});
    background-size: cover;
  }
`;

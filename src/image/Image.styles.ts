import styled, { css } from 'styled-components';
import Breakpoints from '../styles/breakpoints';

type DefaultProps = {
  hidden: boolean;
};

export const Spinner = styled.div<DefaultProps>(
(props) => css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  ${props.hidden &&
  css`
    display: none;
  `}
  div {
    position: absolute;
    display: inline-block;
    text-align: center;
    border: 4px solid #282c34;
    opacity: 1;
    border-radius: 50%;
    animation: spinner 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
  @keyframes spinner {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`);
Spinner.displayName = "Spinner";


export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  min-height: 200px;
  ${Breakpoints.sm} {
    width: 200px;
    height: auto;
    ${Breakpoints.landscape} {
      min-height: 30px;
      width: auto;
      img {
        width: 30%;
      }
    }
  }
`;
ImageContainer.displayName = "ImageContainer";

export const ImageStyled = styled.img<DefaultProps>(
  (props) => css`
    ${props.hidden &&
    css`
      visibility: hidden;
    `}
`);
ImageStyled.displayName = 'ImageStyled';
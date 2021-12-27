import styled from "styled-components";
import Breakpoints from '../styles/breakpoints';

export const TimerContainer = styled.div`
  border: 5px solid var(--tertiary);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  padding: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 32px;
    font-weight: 700;
    color: var(--primary);
  }
  ${Breakpoints.sm}  {
    ${Breakpoints.landscape} {
      width: 30px;
      height: 30px;
      & > span {
        font-size: 12px;
      }
    }
  }
`;
TimerContainer.displayName = 'TimerContainer';
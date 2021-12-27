import styled, { css } from 'styled-components';
import Breakpoints from '../styles/breakpoints';

type QuestionsBlockProps = {
  highlight: boolean;
};

export const QuestionsBlock = styled.div<QuestionsBlockProps>(
  (props) => css`
    cursor: pointer;
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
    border: 1px solid var(--primary);
    border-radius: 6px;
    padding: 10px;
    margin: 8px 5%;
    &:hover {
      opacity: 0.5;
    }
    ${props.highlight &&
    css`
      color: var(--light);
      border-color: var(--light);
      background: var(--secondary);
    `}
    ${Breakpoints.sm} {
      padding: 3px;
      margin: 4px 2%;
    }
`);
QuestionsBlock.displayName = 'QuestionsBlock';

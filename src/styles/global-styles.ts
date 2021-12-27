import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --light: #FFF;
    --dark: #E0313133;
    --primary: #212C38;
    --secondary: #1C7CE0;
    --secondary-dark: #150051;
    --tertiary: #4172DB;
  }

  body {
    background: linear-gradient(to bottom, var(--secondary), var(--secondary-dark));
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    background-color: var(--primary);
    box-shadow: 0px 3px 5px #E0313133;
    color: #FFF;
    font-size: 14px;
    padding: 24px; 
    border-radius: 10px; 
    border: 1px solid #212C38;
    cursor: pointer;
    outline: inherit;
  }

  button:hover {
    border: 1px solid var(--tertiary);
    background-color: var(--light);
    color: var(--primary);
  }

  span {
    font-size: 12px;
    color: var(--primary);
  }

  img {
    border: 1 solid #212C38;
    border-radius: 3px;
    width: 100%;
    height: auto;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default GlobalStyles;

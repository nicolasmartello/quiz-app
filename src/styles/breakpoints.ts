const mobile = 640;
const tablet = 900;
const desktop = 1366;

const Breakpoints = {
  xs: `@media (max-width: ${mobile}px)`,
  sm: `@media (max-width: ${tablet}px)`,
  md: `@media (max-width: ${desktop}px)`,
  lg: `@media (min-width: ${desktop + 1}px)`,
  landscape: `@media screen and (orientation: landscape)`,
};

export default Breakpoints;
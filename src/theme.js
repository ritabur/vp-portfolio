import { breakpoints as BREAKPOINTS } from 'lib/breakpoints';

const { sm, md, lg, xl } = BREAKPOINTS;

const breakpoints = [sm.min, md.min, lg.min, xl.min].map(b => `${b / 16}em`);

const theme = {
  breakpoints,
  space: [],
  fonts: {
    primary: 'Raleway, sans-serif', // montserrat //raleway //work sans
  },
  colors: {
    bodyPrimary: '#050505',
    bodySecondary: '#aaa',
    divider: '#b5b5b5',
    lightDivider: '#e6e6e6',
    contentBackground: '#f8f8f8',
    contentFooter: '#eaeaea',
  },
  fontSizes: {
    small: '11px',
    smMedium: '13px',
    medium: '14px',
    large: '18px',
  },
  fontWeights: {
    body: 400,
    bold: 700,
  },
};

export default theme;

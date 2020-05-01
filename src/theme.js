import { breakpoints as BREAKPOINTS } from 'lib/breakpoints';

const { sm, md, lg, xl } = BREAKPOINTS;

const breakpoints = [sm.min, md.min, lg.min, xl.min].map(b => `${b / 16}em`);

const theme = {
    breakpoints,
    fonts: {
        primary: "Karla, sans-serif",
    },
    colors: {
        bodyPrimary: "#050505",
        bodySecondary: "#aaa",
    },
    fontSizes: {
        small: 11,
        medium: 14,
        large: 18,
    },
    fontWeights: {
        body: 800,
        heading: 700,
        bold: 700,
    },
};

export default theme;

/* eslint-disable */
import { css } from 'styled-components';
import { breakpoints, sizes } from './breakpoints';

// Use px in breakpoints to work properly cross-browser and support users
// Styled-components reference: https://github.com/styled-components/styled-components/blob/master/packages/styled-components/docs/tips-and-tricks.md
const minCss = (px, ...args) =>
  /* prettier-ignore */
  px === 0
    ? css(...args)
    : css`
      @media (min-width: ${px}px) {
        ${css(...args)}
      }
    `;

const maxCss = (px, ...args) =>
  /* prettier-ignore */
  px === Number.MAX_SAFE_INTEGER
    ? css(...args)
    : css`
      @media (max-width: ${px}px) {
        ${css(...args)}
      }
    `;

const betweenCss = (minPx, maxPx, ...args) =>
  /* prettier-ignore */
  minPx === 0 && maxPx === Number.MAX_SAFE_INTEGER
    ? css(...args)
    : minPx === 0
      ? maxCss(maxPx, ...args)
      : maxPx === Number.MAX_SAFE_INTEGER
        ? minCss(minPx, ...args)
        : css`
          @media (min-width: ${minPx}px) and (max-width: ${maxPx}px) {
            ${css(...args)}
          }
        `;

const from = (fromPx) => {
  const fromFn = (...args) => minCss(fromPx, ...args);
  fromFn.to = (toPx) => (...css) => betweenCss(fromPx, toPx, ...css);
  return fromFn;
};
const to = (toPx) => {
  const toFn = (...args) => maxCss(toPx, ...args);
  toFn.from = (fromPx) => (...css) => betweenCss(fromPx, toPx, ...css);
  return toFn;
};

sizes.forEach((size) => {
  const { min, max } = breakpoints[size];

  const fromFn = (...args) => minCss(min, ...args);
  const toFn = (...args) => maxCss(max, ...args);

  fromFn.to = {};
  toFn.from = {};

  sizes.forEach((size) => {
    fromFn.to[size] = (...css) =>
      betweenCss(min, breakpoints[size].max, ...css);
    toFn.from[size] = (...css) =>
      betweenCss(breakpoints[size].min, max, ...css);
  });

  from[size] = fromFn;
  to[size] = toFn;
});

// iterate through the sizes and create a media template
const media = ['above', 'below', 'only'].reduce((media, key) => {
  media[key] = sizes.reduce((acc, size) => {
    const { min, max } = breakpoints[size];
    switch (key) {
      case 'above':
        if (size === 'xl') {
          return acc;
        }
        acc[size] = (...args) => minCss(max + 1, ...args);
        return acc;

      case 'only':
        acc[size] = (...args) => betweenCss(min, max, ...args);
        return acc;

      case 'below':
        if (size === 'xs') {
          return acc;
        }
        acc[size] = (...args) => maxCss(min - 1, ...args);
        return acc;

      default:
        return acc;
    }
  }, {});
  return media;
}, {});

media.from = from;
media.to = to;

export { media };
export default media;

import * as React from 'react';

import { breakpoints } from '../lib/breakpoints';

export const useMedia = () => {
  const initialValue = typeof window !== `undefined` ? window.innerWidth : 0;
  const [width, setWidth] = React.useState(initialValue);
  const isXs = breakpoints.xs.min < width && breakpoints.xs.max >= width;
  const isSm = breakpoints.sm.min <= width && breakpoints.sm.max >= width;
  const isMd = breakpoints.md.min <= width && breakpoints.md.max >= width;
  const isLg = breakpoints.lg.min <= width && breakpoints.lg.max >= width;
  const isXl = breakpoints.xl.min <= width && breakpoints.xl.max > width;

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { isXs, isSm, isMd, isLg, isXl };
};

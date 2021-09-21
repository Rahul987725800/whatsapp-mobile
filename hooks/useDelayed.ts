import { useEffect, useState } from 'react';

export const useDelayed = <T>(value: T, delay: number) => {
  const [delayedValue, setDelayedValue] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => {
      setDelayedValue(value);
    }, delay);
    return () => {
      clearTimeout(t);
    };
  }, [value]);
  return delayedValue;
};

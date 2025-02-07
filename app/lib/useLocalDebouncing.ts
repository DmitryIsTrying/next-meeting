import { useRef } from "react";

export const useLocalDebouncing = (fn: (...args: any[]) => any, timer: number) => {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  return function (...args: any[]) {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      fn(...args);
    }, timer);
  };
};

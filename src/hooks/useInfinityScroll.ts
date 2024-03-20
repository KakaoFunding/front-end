import { useEffect, useRef } from 'react';

/**
 * Handles infinite scrolling using the Intersection Observer API
 *
 * @param onIntersect function for infinite scrolling
 * @param hasNextPage flag indicating the presence of a next page
 * @returns ref object for the target element
 */
export const useInfinityScroll = (
  onIntersect: () => void,
  hasNextPage: boolean,
) => {
  const target = useRef<HTMLDivElement>(null);

  const handleObserver: IntersectionObserverCallback = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && hasNextPage) {
      onIntersect();
    }
  };
  const observer = new IntersectionObserver(handleObserver);

  useEffect(() => {
    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleObserver]);

  return target;
};

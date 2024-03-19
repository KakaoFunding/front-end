import { useEffect, useRef } from 'react';

/**
 * Handles infinite scrolling using the Intersection Observer API
 *
 * @param onIntersect function for infinite scrolling
 * @param hasNextPage flag indicating the presence of a next page
 * @param isLoading flag indicating whether data is being loaded
 * @returns ref object for the target element
 */
export const useInfinityScroll = (
  onIntersect: () => void,
  hasNextPage: boolean,
  isLoading: boolean,
) => {
  const target = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage && !isLoading) {
        onIntersect();
      }
    });
  });

  if (target.current) observer.observe(target.current);

  useEffect(() => {
    return () => observer.disconnect();
  }, [target]);

  return target;
};

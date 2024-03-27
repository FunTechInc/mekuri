export type HandleIntersectionObserver = (
   targetRef: React.RefObject<HTMLElement>,
   callback: (isIntersecting: boolean) => void
) => void;

export const intersectionObserver: HandleIntersectionObserver = (
   targetRef,
   callback
) => {
   const target = targetRef?.current;
   if (!target) {
      return;
   }
   const observer = new IntersectionObserver(
      (
         entries: IntersectionObserverEntry[],
         observer: IntersectionObserver
      ) => {
         entries.forEach((entry) => {
            callback(entry.isIntersecting);
            observer.unobserve(entry.target);
         });
      },
      { rootMargin: "0px", threshold: 0 }
   );
   observer.observe(target);
};

import React, { ReactElement, ReactNode, useEffect, useRef } from "react";

type StickySectionHeaderProps = {
  children: ReactNode;
  top?: number;
  viewPort?: ReactElement;
};

export function StickySectionHeader({
  children,
  top = 0,
  viewPort,
  ...props
}: StickySectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const target = ref?.current;
    if (!target) return;
    const options = {
      root: viewPort || null,
      rootMargin: `${-(top + 1)}px 0px 0px 0px`,
      threshold: [1],
    };
    const observerHandler = (entries: any[]) => {
      if (entries[0].boundingClientRect.top < parseInt(`${top + 1}`)) {
        entries[0].target.style.position = "sticky";
      } else {
        entries[0].target.style.position = "unset";
      }
    };
    // @ts-ignore
    const observer = new IntersectionObserver(observerHandler, options);
    target && observer.observe(target);
    return () => {
      target && observer.unobserve(target);
    };
  }, [ref?.current, viewPort]);
  return (
    <header style={{ top: `${top}px` }} ref={ref} {...props}>
      {children}
    </header>
  );
}

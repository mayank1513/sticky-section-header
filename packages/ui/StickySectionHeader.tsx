"use client";
import React, {
  HTMLProps,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from "react";

type StickySectionHeaderProps = {
  children: ReactNode;
  top?: number;
  viewPort?: ReactElement;
  callBack?: (entry: any) => void;
  stick?: boolean;
  tag?: keyof JSX.IntrinsicElements /**html tag to replace header for SEO and symantics */;
};

export function StickySectionHeader({
  children,
  top = 0,
  viewPort,
  callBack,
  stick = true,
  tag = "header",
  ...props
}: StickySectionHeaderProps & HTMLProps<HTMLElement>) {
  const Tag = tag || "header";
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
      callBack?.(entries[0]);
      if (!entries[0]) return;
      const { boundingClientRect, rootBounds, target } = entries[0];
      if (stick && boundingClientRect.top - rootBounds.top < top + 1) {
        target.style.position = "sticky";
        target.toggleAttribute("stuck", true);
      } else {
        target.style.position = "unset";
        target.toggleAttribute("stuck", false);
      }
    };
    // @ts-ignore
    const observer = new IntersectionObserver(observerHandler, options);
    target && observer.observe(target);
    return () => {
      target && observer.unobserve(target);
    };
  }, [callBack, stick, top, viewPort]);
  const style = { top: `${top}px`, boxSizing: "border-box" };
  return (
    // @ts-ignore
    <Tag style={style} ref={ref} {...props}>
      {children}
    </Tag>
  );
}

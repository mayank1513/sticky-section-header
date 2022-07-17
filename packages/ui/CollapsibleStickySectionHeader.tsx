import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";

type CollapsibleStickySectionHeaderProps = {
  children: ReactNode;
  maxHeight: number;
  minHeight: number;
  onChangeHeight?: (fraction: number, headerHeight: number) => void;
  top?: number /**distance from top in px when in sticky state */;
  viewPort?: ReactElement;
  nCheckPoints?: number /**tune performance */;
};

export function CollapsibleStickySectionHeader({
  children,
  maxHeight,
  minHeight,
  onChangeHeight,
  top = 0,
  viewPort,
  nCheckPoints = 100,
  ...props
}: CollapsibleStickySectionHeaderProps) {
  const probeRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  if (minHeight > maxHeight)
    throw Error("minHeight can not be greated than maxHeight.");
  const probeHeight = maxHeight - minHeight;
  useEffect(() => {
    const target = probeRef?.current;
    if (!target) return;
    const options = {
      root: viewPort || null,
      rootMargin: `${-(top + 1)}px 0px 0px 0px`,
      threshold: [...Array(nCheckPoints).keys(), nCheckPoints].map(
        (i) => i / nCheckPoints
      ),
    };
    const observerHandler = (entries: any[]) => {
      const header = ref.current;
      if (!header || !entries[0]) return;
      const { intersectionRatio, boundingClientRect, rootBounds } = entries[0];
      const headerHeight = minHeight + intersectionRatio * probeHeight;
      // @ts-ignore
      header.style.height = `${headerHeight}px`;
      onChangeHeight?.(intersectionRatio, headerHeight);
      const isSticky = boundingClientRect.top - rootBounds.top < top + 1;
      // @ts-ignore
      header.style.position = isSticky ? "sticky" : "unset";
      // @ts-ignore
      header.toggleAttribute("stuck", isSticky);
    };
    // @ts-ignore
    const observer = new IntersectionObserver(observerHandler, options);
    target && observer.observe(target);
    return () => {
      target && observer.unobserve(target);
    };
  }, [probeRef?.current, viewPort]);

  const styles = useMemo(
    () => ({
      container: {
        position: "relative",
        height: `${maxHeight}px`,
        marginBottom: `${-maxHeight}px`,
        pointerEvents: "none",
      },
      probe: {
        position: "absolute",
        height: `${probeHeight}px`,
        top: `0px`,
        width: "100%",
        pointerEvents: "none",
      },
      header: {
        top: `${top}px`,
        height: `${maxHeight}px`,
        width: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
      },
    }),
    [maxHeight, minHeight, top]
  );

  return (
    <>
      <div className="container" style={styles.container as CSSProperties}>
        <div
          className="probe"
          ref={probeRef}
          style={styles.probe as CSSProperties}
        ></div>
      </div>
      <header ref={ref} style={styles.header as CSSProperties} {...props}>
        {children}
      </header>
    </>
  );
}

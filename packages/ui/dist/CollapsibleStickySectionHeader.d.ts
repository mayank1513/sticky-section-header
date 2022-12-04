import { HTMLProps, ReactElement, ReactNode } from "react";
type CollapsibleStickySectionHeaderProps = {
    children: ReactNode;
    maxHeight: number;
    minHeight: number;
    onChangeHeight?: (fraction: number, headerHeight: number) => void;
    top?: number /**distance from top in px when in sticky state */;
    viewPort?: ReactElement;
    nCheckPoints?: number /**tune performance */;
    tag?: keyof JSX.IntrinsicElements /**html tag to replace header for SEO and symantics */;
};
export declare function CollapsibleStickySectionHeader({ children, maxHeight, minHeight, onChangeHeight, top, viewPort, nCheckPoints, tag, ...props }: CollapsibleStickySectionHeaderProps & HTMLProps<HTMLElement>): JSX.Element;
export {};
//# sourceMappingURL=CollapsibleStickySectionHeader.d.ts.map
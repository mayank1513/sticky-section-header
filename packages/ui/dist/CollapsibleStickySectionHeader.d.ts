import { ReactElement, ReactNode } from "react";
declare type CollapsibleStickySectionHeaderProps = {
    children: ReactNode;
    maxHeight: number;
    minHeight: number;
    onChangeHeight?: (fraction: number, headerHeight: number) => void;
    top?: number /**distance from top in px when in sticky state */;
    viewPort?: ReactElement;
    nCheckPoints?: number /**tune performance */;
};
export declare function CollapsibleStickySectionHeader({ children, maxHeight, minHeight, onChangeHeight, top, viewPort, nCheckPoints, ...props }: CollapsibleStickySectionHeaderProps): JSX.Element;
export {};
//# sourceMappingURL=CollapsibleStickySectionHeader.d.ts.map
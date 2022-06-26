import { ReactElement, ReactNode } from "react";
declare type StickySectionHeaderProps = {
    children: ReactNode;
    top?: number;
    viewPort?: ReactElement;
    callBack?: (entry: any) => void;
    stick?: boolean;
};
export declare function StickySectionHeader({ children, top, viewPort, callBack, stick, ...props }: StickySectionHeaderProps): JSX.Element;
export {};
//# sourceMappingURL=StickySectionHeader.d.ts.map
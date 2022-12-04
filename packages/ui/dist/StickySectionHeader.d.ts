import { HTMLProps, ReactElement, ReactNode } from "react";
type StickySectionHeaderProps = {
    children: ReactNode;
    top?: number;
    viewPort?: ReactElement;
    callBack?: (entry: any) => void;
    stick?: boolean;
    tag?: keyof JSX.IntrinsicElements /**html tag to replace header for SEO and symantics */;
};
export declare function StickySectionHeader({ children, top, viewPort, callBack, stick, tag, ...props }: StickySectionHeaderProps & HTMLProps<HTMLElement>): JSX.Element;
export {};
//# sourceMappingURL=StickySectionHeader.d.ts.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleStickySectionHeader = void 0;
const react_1 = __importStar(require("react"));
function CollapsibleStickySectionHeader(_a) {
    var { children, maxHeight, minHeight, onChangeHeight, top = 0, viewPort, nCheckPoints = 100 } = _a, props = __rest(_a, ["children", "maxHeight", "minHeight", "onChangeHeight", "top", "viewPort", "nCheckPoints"]);
    const probeRef = (0, react_1.useRef)(null);
    const ref = (0, react_1.useRef)(null);
    if (minHeight > maxHeight)
        throw Error("minHeight can not be greated than maxHeight.");
    const probeHeight = maxHeight - minHeight;
    (0, react_1.useEffect)(() => {
        const target = probeRef === null || probeRef === void 0 ? void 0 : probeRef.current;
        if (!target)
            return;
        const options = {
            root: viewPort || null,
            rootMargin: `${-(top + 1)}px 0px 0px 0px`,
            threshold: [...Array(nCheckPoints).keys(), nCheckPoints].map((i) => i / nCheckPoints),
        };
        const observerHandler = (entries) => {
            const header = ref.current;
            if (!header || !entries[0])
                return;
            const { intersectionRatio, boundingClientRect } = entries[0];
            const headerHeight = minHeight + intersectionRatio * probeHeight;
            // @ts-ignore
            header.style.height = `${headerHeight}px`;
            onChangeHeight === null || onChangeHeight === void 0 ? void 0 : onChangeHeight(intersectionRatio, headerHeight);
            // @ts-ignore
            header.style.position =
                boundingClientRect.top < top + 1 ? "sticky" : "unset";
        };
        // @ts-ignore
        const observer = new IntersectionObserver(observerHandler, options);
        target && observer.observe(target);
        return () => {
            target && observer.unobserve(target);
        };
    }, [probeRef === null || probeRef === void 0 ? void 0 : probeRef.current, viewPort]);
    const styles = (0, react_1.useMemo)(() => ({
        container: {
            position: "relative",
            height: `${maxHeight}px`,
            marginBottom: `${-maxHeight}px`,
            pointerEvents: "none"
        },
        probe: {
            position: "absolute",
            height: `${probeHeight}px`,
            top: `0px`,
            width: "100%",
            pointerEvents: "none"
        },
        header: {
            top: `${top}px`,
            height: `${maxHeight}px`,
            width: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
        },
    }), [maxHeight, minHeight, top]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "container", style: styles.container },
            react_1.default.createElement("div", { className: "probe", ref: probeRef, style: styles.probe })),
        react_1.default.createElement("header", Object.assign({ ref: ref, style: styles.header }, props), children)));
}
exports.CollapsibleStickySectionHeader = CollapsibleStickySectionHeader;

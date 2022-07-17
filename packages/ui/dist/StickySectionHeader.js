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
exports.StickySectionHeader = void 0;
const react_1 = __importStar(require("react"));
function StickySectionHeader(_a) {
    var { children, top = 0, viewPort, callBack, stick = true } = _a, props = __rest(_a, ["children", "top", "viewPort", "callBack", "stick"]);
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const target = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!target)
            return;
        const options = {
            root: viewPort || null,
            rootMargin: `${-(top + 1)}px 0px 0px 0px`,
            threshold: [1],
        };
        const observerHandler = (entries) => {
            callBack === null || callBack === void 0 ? void 0 : callBack(entries[0]);
            if (!entries[0])
                return;
            const { boundingClientRect, rootBounds, target } = entries[0];
            if (stick && boundingClientRect.top - rootBounds.top < top + 1) {
                target.style.position = "sticky";
                target.toggleAttribute("stuck", true);
            }
            else {
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
    return (react_1.default.createElement("header", Object.assign({ style: { top: `${top}px`, boxSizing: "border-box" }, ref: ref }, props), children));
}
exports.StickySectionHeader = StickySectionHeader;

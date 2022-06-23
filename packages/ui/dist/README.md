# Sticky Section Header

This package exports 2 components. `StickySectionHeader` is a light weight simmple to use component. Just wrap your headers/section headers inside `StickySectionHeader` component and provide top (top position - margin from top of viewport) and viewPort (The container element, by default the browser viewport).

[`CollapsibleStickySectionHeader`](#CollapsibleStickySectionHeader) adds on to the capabilities of `StickySectionHeader`. (See below...)

## Installation

Install StickySectionHeader from npm registry using one of the following

```
yarn add @mayank1513/sticky-section-header
npm i @mayank1513/sticky-section-header
pnpm i @mayank1513/sticky-section-header
```

## Simple usage

```
import StickySectionHeader from "@mayank1513/sticky-section-header";

export default function YourComponent() {
  return (
    <div>
        <StickySectionHeader>
            <h1>My Awesome Header</h1>
        </StickySectionHeader>
    </div>
  );
}
```

## Use with custom top position

```
import StickySectionHeader from "@mayank1513/sticky-section-header";

export default function YourComponent() {
  return (
    <div>
        <StickySectionHeader top=50>
            <h1>My Awesome Header</h1>
        </StickySectionHeader>
    </div>
  );
}
```

## Use with custom top position and viewport

```
import StickySectionHeader from "@mayank1513/sticky-section-header";
import { useRef } from "react";

export default function YourComponent() {
  const ref = useRef();
  return (
    <div>
        // your other stuff
        <div className="container-section" ref={ref}>
            <StickySectionHeader top=50 viewPort={ref.current}>
                <h1>My Awesome Header</h1>
            </StickySectionHeader>
        </div>
    </div>
  );
}
```

# CollapsibleStickySectionHeader

```
import CollapsibleStickySectionHeader from "@mayank1513/sticky-section-header";

export default function YourComponent() {
  return (
    <div>
        <CollapsibleStickySectionHeader maxHeight={150} minHeight={50}>
            <YourHeaderComponent>My Awesome Header</YourHeaderComponent>
        </CollapsibleStickySectionHeader>
    </div>
  );
}
```

You can also optionally pass onHeightChange function if you need to change something based on the height of the header.

Make sure to set `height: 100%` for the coponent directly inside the `CollapsibleStickySectionHeader`

# Sticky Section Header

[![.github/workflows/npm.yml](https://github.com/mayank1513/sticky-section-header/actions/workflows/npm.yml/badge.svg?event=release)](https://github.com/mayank1513/sticky-section-header/actions/workflows/npm.yml)

`StickySectionHeader` is a light weight simmple to use component. Just wrap your headers/section headers inside `StickySectionHeader` component and provide top (top position - margin from top of viewport) and viewPort (The container element, by default the browser viewport)

## Installation

Install StickySectionHeader from npm registry using one of the following

```
yarn add @mayank1513/sticky-section-header
npm i @mayank1513/sticky-section-header
pnpm i @mayank1513/sticky-section-header
```

## Simple usage

```
import from "@mayank1513/sticky-section-header";

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
import from "@mayank1513/sticky-section-header";

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
import from "@mayank1513/sticky-section-header";
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

import { CollapsibleStickySectionHeader, StickySectionHeader } from "ui";
import { styled } from "linaria/react";
import { css } from "linaria";
import ReactMarkdown from "react-markdown";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  line-height: 24px;
  h1,
  h2 {
    background: white;
  }
`;

const Header = styled.h1`
  background: #f99 !important;
  margin: 0;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  height: 100%;
`;

export default function Docs() {
  return (
    <Container>
      <CollapsibleStickySectionHeader maxHeight={150} minHeight={50}>
        <Header>Collapsing Sticky Header</Header>
      </CollapsibleStickySectionHeader>
      <br />
      <ReactMarkdown>
        {`
\`\`\`
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
\`\`\`

You can also optionally pass onHeightChange function if you need to change something based on the height of the header.

Make sure to set \`height: 100%\` for the coponent directly inside the \`CollapsibleStickySectionHeader\`
        `}
      </ReactMarkdown>
      <br />
      <ul>
        {[...Array(5).keys()].map((i) => (
          <li key={`row_ -- ${i}`}>Some random Row {i}</li>
        ))}
      </ul>
      <section>
        <StickySectionHeader top={50}>
          <h1>
            <code>StickySectionHeader</code>
          </h1>
        </StickySectionHeader>
        <p>
          <code>StickySectionHeader</code> is a light weight simmple to use
          component. Just wrap your headers/section headers inside
          <code> StickySectionHeader</code> component and provide top (top
          position - margin from top of viewport) and viewPort (The container
          element, by default the browser viewport)
        </p>
      </section>
      <br />
      <section>
        <StickySectionHeader top={50}>
          <h2>Installation</h2>
        </StickySectionHeader>
        Install <code>StickySectionHeader</code> from npm registry using one of
        the following
        <br />
        <br />
        <code>yarn add @mayank1513/sticky-section-header</code>
        <br />
        <code>npm i @mayank1513/sticky-section-header</code>
        <br />
        <code>pnpm i @mayank1513/sticky-section-header</code>
        <br />
      </section>
      <br />
      <section>
        <StickySectionHeader top={50}>
          <h2>Simple usage</h2>
        </StickySectionHeader>
        <code>
          import &#123;StickySectionHeader&#125; from
          "@mayank1513/sticky-section-header";
        </code>
        <br />
        <br />
        <code>export default function YourComponent() &#123;</code>
        <br />
        <code> &nbsp; return (</code>
        <br />
        <code> &nbsp; &nbsp; &lt;div&gt;</code>
        <br />
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &lt;StickySectionHeader&gt;</code>
        <br />
        <code>
          {" "}
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;h1&gt;My Awesome
          Header&lt;/h1&gt;
        </code>
        <br />
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &lt;/StickySectionHeader&gt;</code>
        <br />
        <code> &nbsp; &nbsp; &lt;/div&gt;</code>
        <br />
        <code> &nbsp; );</code>
        <br />
        <code>&#125;</code>
        <br />
      </section>
      <br />
      <section>
        <StickySectionHeader
          top={70}
          callBack={(entry) => console.log("waypoint", entry)}>
          <h2>Use with custom top position</h2>
        </StickySectionHeader>
        <code>
          import &#123;StickySectionHeader&#125; from
          "@mayank1513/sticky-section-header";
        </code>
        <br />
        <br />
        <code>export default function YourComponent() &#123;</code>
        <br />
        <code> &nbsp; return (</code>
        <br />
        <code> &nbsp; &nbsp; &lt;div&gt;</code>
        <br />
        <code>
          {" "}
          &nbsp; &nbsp; &nbsp; &nbsp; &lt;StickySectionHeader top={50}&gt;
        </code>
        <br />
        <code>
          {" "}
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;h1&gt;My Awesome
          Header&lt;/h1&gt;
        </code>
        <br />
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &lt;/StickySectionHeader&gt;</code>
        <br />
        <code> &nbsp; &nbsp; &lt;/div&gt;</code>
        <br />
        <code> &nbsp; );</code>
        <br />
        <code>&#125;</code>
        <br />
      </section>
      <br />
      <p>Some random data to enable scrolling;</p>
      <ul>
        {[...Array(150).keys()].map((i) => (
          <li key={`row -- ${i}`}> Row {i}</li>
        ))}
      </ul>
      <div>
        Some random data to enable scrolling; Some random data to enable Some
        Some random data to enable scrolling; random data to enable scrolling;
        Some random data to enable scrolling; Some random data to enable Some
        Some random data to enable scrolling; random data to enable scrolling;
        Some random data to enable scrolling; Some random data to enable Some
        Some random data to enable scrolling; random data to enable scrolling;
        Some random data to enable scrolling; Some random data to enable Some
        random data to enable scrolling; scrolling; scrolling; scrolling; Some
        Some random data to enable scrolling; random data to enable scrolling;
        Some random data to enable scrolling; Some random data to enable Some
        Some random data to enable scrolling; random data to enable scrolling;
        Some random data to enable scrolling; Some random data to enable Some
        Some random data to enable scrolling; random data to enable scrolling;
        Some random data to enable scrolling; Some random data to enable
        scrolling; Some random data to enable scrolling; Some random data to
        enable scrolling; Some random data to enable scrolling; Some random data
        to enable scrolling; Some random data to enable scrolling; Some random
        data to enable scrolling; Some random data to enable scrolling; Some
        random data to enable scrolling; Some random data to enable scrolling;
        Some random data to enable scrolling; Some random data to enable
        scrolling; Some random data to enable scrolling; Some random data to
        enable scrolling; Some random data to enable scrolling; Some random data
        to enable scrolling; Some random data to enable scrolling; scrolling;
        scrolling; scrolling;
      </div>
    </Container>
  );
}

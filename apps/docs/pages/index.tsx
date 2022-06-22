import { StickySectionHeader } from "@mayank1513/sticky-section-header";
import { styled } from "linaria/react";
import { css } from "linaria";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  line-height: 24px;
  h1,
  h2 {
    background: white;
  }
`;

export default function Docs() {
  return (
    <Container>
      <StickySectionHeader>
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
      <br />
      <StickySectionHeader>
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
      <br />
      <StickySectionHeader>
        <h2>Simple usage</h2>
      </StickySectionHeader>
      <code>
        import {StickySectionHeader} from "@mayank1513/sticky-section-header";
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
      <br />
      <StickySectionHeader top={50}>
        <h2>Use with custom top position</h2>
      </StickySectionHeader>
      <code>
        import {StickySectionHeader} from "@mayank1513/sticky-section-header";
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
      <br />
      <p>Some random data to enable scrolling;</p>
      <ul>
        {[...Array(150).keys()].map((i) => (
          <li> Row {i}</li>
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

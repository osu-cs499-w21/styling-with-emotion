/** @jsxImportSource @emotion/react */
// import React from 'react';
import { css } from '@emotion/react';

const pet = "cat"
const templateLiteral = `I have a ${pet}`;

const baseStyles = css`
  color: indigo;
`;

function ArticleText(props) {
  const styles = css`
    ${baseStyles}
    margin: 0;
    font-size: 18px;
    font-variant: small-caps;
  `;
  return <p css={styles} {...props}>{props.children}</p>;
}

function FootnoteText(props) {
  const styles = css`
    font-size: 12px;
    color: gray;
  `;
  return <ArticleText css={styles}>{props.children}</ArticleText>;
}

function Button(props) {
  console.log("== button props:", props);
  const styles = css`
    color: ${props.secondary ? 'royalblue' : 'snow'};
    background-color: ${props.secondary ? 'whitesmoke' : 'royalblue'};
    border: 2px solid royalblue;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    &:hover {
      background-color: ${props.secondary ? 'gainsboro' : 'dodgerblue'};
    }
    h1 & {

    }
  `;
  return <button css={styles}>{props.children}</button>;
}

function PhotoCard(props) {
  const styles = css`
    display: inline-block;
    border: 1px solid darkgray;
    padding: 5px;
    margin: 5px;
    img {
      max-width: 100px;
    }
    p {
      text-align: center;
    }
  `;
  return (
    <div css={styles}>
      <img src={props.url} alt={props.caption} />
      <p>{props.caption}</p>
    </div>
  );
}

function App() {
  const warning = false;
  const color = 'olivedrab';
  const headerStyles = css`
    background-color: lavenderblush;
    color: ${color};
    margin: 0;
    padding: 10px;
  `;
  const divStyles = {
    backgroundColor: 'floralwhite',
    color: warning ? 'firebrick' : 'forestgreen'
  };
  return (
    <div css={divStyles}>
      <h1 css={headerStyles}>What a boring app...</h1>
      <Button>Here's a button</Button>
      <Button secondary>Here's a secondary button</Button>
      <PhotoCard url="http://placekitten.com/480/480" caption="Cute kitty" />
      Here's some div text
      <ArticleText>
        Here's some article text.
      </ArticleText>
      <FootnoteText>
        Here's some footnote text.
      </FootnoteText>
    </div>
  );
}

export default App;

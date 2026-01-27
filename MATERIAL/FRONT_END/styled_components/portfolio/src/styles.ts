import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        list-style:none;
    }

    body{
    padding-top:clamp(1rem, -0.6364rem + 7.2727vw, 5rem);
    }
`;
export default GlobalStyle;

export const Container = styled.div`
  max-width: clamp(51.1875rem, 45.946rem + 23.2955vw, 64rem);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 8rem auto;
  column-gap: 3.5rem;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
  img {
    max-width: 100%;
  }
`;

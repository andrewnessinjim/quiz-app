import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    
    input, button, textarea, select {
        font: inherit;
    }
   
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
   
    #root, #__next {
        isolation: isolate;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        font-family: "Segoe UI", sans-serif;
        background-color: ${(p) => p.theme.colors.plum1};
        color: ${(p) => p.theme.colors.plum11};

        display: flex;
        justify-content: center;
        align-items: center;
    }

    html, body {
        height: 100%;
    }
`;

export default GlobalStyles;

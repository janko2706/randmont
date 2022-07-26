import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    :root{
        --light-blue-color: #B3CFF2;
        --darker-blue-color: #899DD9;
        --purple-color: #5F4A8C;
        --brown-color-dark: #8C501B;
        --brown-color-light: #BFB8A3;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Syne', sans-serif;
    }

    body{
        background-color: var(--light-blue-color);
        min-height: 100vh;
    }

`;

export default GlobalStyle;
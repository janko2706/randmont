import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #48577D;
        --secondary-color: #7690CF;
        --border-color: #9197A6;
        --background-color-dark: #43464C;
        --background-color-light: #9197A6;
        --navbar-color: #343434;
        --white-color: #ffffff;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        -font-dark-color-2: #151515;

    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }

    body{
        background-color: var(--background-color-dark);
        min-height: 100vh;
    }

`;

export default GlobalStyle;
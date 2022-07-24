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
        list-style: none;
        text-decoration: none;
        font-family: 'Lato', sans-serif;
        font-size: 1.2rem;
    }

    body{
        background-color: var(--background-color-dark);
        color: var(--font-light-color);
    }
    a{
        color: inherit;
    }
    h1{
        font-size: 4rem;
        color: var(--white-color);
        span{
            font-size: 6rem;
            color: var(--primary-color)
        }
    }

    .menuButton{
        display: none;
        position: absolute;
        right: 2%;
        top: 2%;
        z-index: 20;
        cursor: none;
        svg{
            font-size: 3rem;
        }
    }

    .nav-toggle{
        transform: translateX(0);
        z-index: 50;
    }
    @media screen and (max-width: 1200px){
        .menuButton{
            display: block;
        }
    }

`;

export default GlobalStyle;
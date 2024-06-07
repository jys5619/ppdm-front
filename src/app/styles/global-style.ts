import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
}

html {
    font-size: ${props => props.theme.font.fontSize}px;
}

body {
    background-color: ${props => props.theme.colors.colorBackground};
    color: ${props => props.theme.colors.colorMainFont};
    font-family: "Noto Sans KR", Tahoma, sans-serif ;
    overflow-y: hidden;
}
a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

input-security, button {
    background-color: transparent;
    color: inherit;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    padding: 0;
    font-weight: ${props => props.theme.font.fontWeight};
}
h1, h2,h3,h4,h5,h6 {
    font-family: 'Maven Pro', sans-serif;
}

ol,ul,li{
    list-style: none;
}

img {
    display: block;
    width: 100%;
    height: 100%;
}
`;

export default GlobalStyle;

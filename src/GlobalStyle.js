import { createGlobalStyle } from "styled-components";

// Para asignar los estilos globales como base.
const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
}
`;

export default GlobalStyle;
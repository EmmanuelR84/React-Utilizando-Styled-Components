import React, { useState } from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
// Importar para utilizar los temas, se debe encapsular dentro de temas todo lo que queremos que cambie el tema
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { BtnTema } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

console.log(temaClaro, temaOscuro);

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  } 

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro } >
      <GlobalStyle />
      <BtnTema onClick={(toggleTema)} >
        <SwitcherTheme tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;

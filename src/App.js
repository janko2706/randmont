import React from "react";
import styled from "styled-components";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import SidebarMenu from "./components/SidebarMenu";



function App() {
  return (
    <>
      <SidebarMenu/>
      

      <MainContentStyled>

        <AnimatedRoutes/>

      </MainContentStyled>
      <Footer/>

    </>
  );
}

const MainContentStyled = styled.main`
  //TO-DO
`;

export default App;

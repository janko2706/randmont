import React from "react";
import styled from "styled-components";
import AnimatedRoutes from "./components/AnimatedRoutes";
import SidebarMenu from "./components/SidebarMenu";



function App() {
  return (
    <>
      <SidebarMenu/>
      

      <MainContentStyled>

        <AnimatedRoutes/>

      </MainContentStyled>


    </>
  );
}

const MainContentStyled = styled.main`
  //TO-DO
`;

export default App;

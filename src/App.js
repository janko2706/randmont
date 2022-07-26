import React from "react";
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import SidebarMenu from "./components/SidebarMenu";
import HomePage from "./pages/HomePage";



function App() {
  return (
    <>
      <SidebarMenu/>
      

      <MainContentStyled>

        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/about" element={<></>}/>

          <Route path="/services" element={<></>}/>

          <Route path="/contact" element={<></>}/>

        </Routes>
      </MainContentStyled>


    </>
  );
}

const MainContentStyled = styled.main`
  //TO-DO
`;

export default App;

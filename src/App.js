import React from "react";
import styled from "styled-components";
import { Box } from '@material-ui/core';
import Navbar from "./layouts/navbar/navbar";
import Content from "./layouts/content/content";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

function App() {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <StyledComponent>
          <Navbar />
          <Content />
        </StyledComponent>
      </Web3ReactProvider>
    </>
  );
}

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #F9F9F9;
`
export default App;

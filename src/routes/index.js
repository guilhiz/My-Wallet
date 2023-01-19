import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme";
import React from "react";
import SignIn from "../pages/SignIn";

export function RouteProvider() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignIn />} />
          <Route path="/home" element={<SignIn />} />
          <Route path="/nova-entrada" element={<SignIn />} />
          <Route path="/nova-saida" element={<SignIn />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}


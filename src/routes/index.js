import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme";
import React from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import NewIncome from "../pages/NewIncome";

export function RouteProvider() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<NewIncome />} />
          <Route path="/nova-saida" element={<SignIn />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

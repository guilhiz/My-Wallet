import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStickyState } from "../hooks";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import NewIncome from "../pages/NewIncome";
import NewExpense from "../pages/NewExpense";

export function RouteProvider() {
  const [user, setUser] = useStickyState({}, "user");
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/nova-entrada" element={<NewIncome user={user} />} />
          <Route path="/nova-saida" element={<NewExpense user={user} />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

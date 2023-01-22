import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStickyState } from "../hooks";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import NewRecord from "../pages/NewRecord";
import EditRecord from "../pages/EditRecord";

export function RouteProvider() {
  const [user, setUser] = useStickyState({}, "user");
  const [refresh, setRefresh] = useState(true);
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home user={user} refresh={refresh} setRefresh={setRefresh} />} />
          <Route path="/novo-registro" element={<NewRecord user={user} setRefresh={setRefresh} />} />
          <Route path="/editar-registro/:id" element={<EditRecord user={user} setRefresh={setRefresh} />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

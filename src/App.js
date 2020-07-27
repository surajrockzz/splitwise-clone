import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "./Layouts/Header";
import Dashboard from "./Components/Dashboard";
import AllExpenses from "./Components/AllExpenses";
import Friends from "./Components/Friends";
import RecentAcitivity from "./Components/RecentActivity";
import Invite from "./Components/Invite";
import Groups from "./Components/Groups";
import Login from "./Components/Login";
import SignUpForm from "./Components/SignUpForm";

import "./styles/app.css";
export const AuthContext = React.createContext();

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const initialState = { isAuthenticated, setisAuthenticated };

  const theme = createMuiTheme({
    palette: {
      type: "light",
    },
  });

  return (
    <Router>
      <AuthContext.Provider value={initialState}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <Container fixed>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/activity">
                <RecentAcitivity />
              </Route>
              <Route exact path="/all">
                <AllExpenses />
              </Route>
              <Route exact path="/groups">
                <Groups />
              </Route>
              <Route exact path="/friends">
                <Friends />
              </Route>
              <Route exact path="/invite">
                <Invite />
              </Route>
              <Route exact path="/signup">
                <SignUpForm />
              </Route>
            </Container>
          </div>
        </ThemeProvider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;

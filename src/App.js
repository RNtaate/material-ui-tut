import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from "@mui/material/colors";

import Notes from "./pages/Notes";
import Create from "./pages/Create";

let theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe"
    },
    secondary: purple
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif;",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

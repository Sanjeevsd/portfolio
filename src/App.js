import "./App.css";
import React from "react";
import { Container, Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";
import Certificates from "./pages/Certificates/Certificates";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cv from "./pages/Cv/Cv";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Helmet } from "react-helmet";

function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={"7"}>
        <Grid item xs={12} sm={12} lg={3} md={4}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main_content container_shadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/certificate">
                  <Certificates />
                </Route>
                <Route path="/">
                  <Cv />
                </Route>
              </Switch>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

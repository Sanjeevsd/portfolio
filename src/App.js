import "./App.css";
import React from "react";
import { Container, Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import myimage from "./assets/images/profile.jpg";
import Portfolio from "./pages/Portfolio/Portfolio";
import Certificates from "./pages/Certificates/Certificates";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cv from "./pages/Cv/Cv";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import resumeData from "./utils/resumeData";

function App() {
  return (
    <Container className={"top_60"}>
      <Helmet>
        <title>Sanjeev Das</title>
        <meta name="description" content={resumeData.about_me} />
        <script type="application/ld+json">
          "@type": "Organization",
          "image":"https://scontent.fktm8-1.fna.fbcdn.net/v/t1.15752-9/158579484_987932455071843_8608150093775405199_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=_ZI5hWP4rqMAX9H7TQx&_nc_ht=scontent.fktm8-1.fna&oh=cf5b487bf1f2fb7572f2b416dbfa6d35&oe=606ECB6B"
          , "url": "http://sanjeevd.com.np", "name": "Sanjeev Das",
        </script>
      </Helmet>
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

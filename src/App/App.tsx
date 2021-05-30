import { CssBaseline } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
  Redirect,
} from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { routes } from "../config/router";

const App: React.FC<{}> = (props) => {
  return (
    <div>
      <CssBaseline>
        <BrowserRouter>
          <Header />
          <Switch>
            {/* //todo for specific redirections? wip */}
            <Redirect exact from="/details" to="/" />
            <Redirect exact from="/info" to="/" />
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  )}
                />
              );
            })}
          </Switch>
          <Footer />
        </BrowserRouter>
      </CssBaseline>
    </div>
  );
};

export default App;

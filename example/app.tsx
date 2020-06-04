import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import Dashboard from "./dashboard";

const APP = () => {
  return (
    <Router>
      <Route path="/" render={p => <Dashboard path={p.match.path} />} />
    </Router>
  );
};

function renderApp() {
  ReactDOM.render(<APP />, document.querySelector("#app_container"));
}

window.onload = () => {
  renderApp();
};

declare var module: any;
if (module != null) {
  module.hot.accept(["./dashboard"], () => {
    renderApp();
  });
}

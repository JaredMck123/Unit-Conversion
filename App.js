import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Length from "./Length";
import Weight from "./Weight";
import Temperature from "./Temperature";
import Time from "./Time";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/length" exact component={Length} />
        <Route path="/weight" exact component={Weight} />
        <Route path="/temperature" exact component={Temperature} />
        <Route path="/time" exact component={Time} />
      </div>
    </Router>
  );
}

export default App;

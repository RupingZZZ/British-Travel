import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Base from "./pages/base/base";
function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Base}></Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;

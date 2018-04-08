import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const SurveyNew = () => {
  <h2>SurveyNew</h2>;
};
const DashBoard = () => {
  <h2>DashBoard</h2>;
};
const Landing = () => {
  <h2>Landing</h2>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" component={Landing} />
          <Route path="surveys" component={DashBoard} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
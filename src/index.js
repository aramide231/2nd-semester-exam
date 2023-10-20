import React from 'react';
import { createRoot } from 'react-dom/client';
import{BrowserRouter} from "react=rounter-dom";

import App from './App';


ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')

);

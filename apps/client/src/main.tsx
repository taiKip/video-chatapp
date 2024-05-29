import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'

import { store } from './app/store.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

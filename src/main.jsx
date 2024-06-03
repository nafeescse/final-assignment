import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { router } from "./routes/routes.jsx";
// import {AuthProvider} from './AuthProvider/AuthProvider.jsx';
// import { RouterProvider } from 'react-router-dom';
import App from './App.jsx';
// import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App></App>
    {/* <AuthProvider>
      <App />

    </AuthProvider> */}
  </React.StrictMode>
);
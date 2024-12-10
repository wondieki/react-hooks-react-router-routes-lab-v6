// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './routes';  // Import the routes from routes.js
import './index.css';

// Create the router instance using the routes
const router = createBrowserRouter(routes);

// Render the app with RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
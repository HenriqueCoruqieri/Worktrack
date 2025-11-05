import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/appRoutes.jsx";
import "./index.css";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

const router = createBrowserRouter(appRoutes);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

import { BrowserRouter, useRoutes } from "react-router-dom";
import { appRoutes } from "./routes/appRoutes";

function AppRoutes() {
  return useRoutes(appRoutes);
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

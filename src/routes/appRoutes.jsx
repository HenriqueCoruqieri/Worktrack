import { lazy, Suspense } from "react";

const App = lazy(() => import("../App"));
const Register = lazy(() => import("../pages/register"));
const UserHomepage = lazy(() => import("../pages/user-homepage"));

export const appRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
  },

  {
    path: "/register",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Register />
      </Suspense>
    ),
  },

  {
    path: ":nome",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <UserHomepage />
      </Suspense>
    ),
  },
];

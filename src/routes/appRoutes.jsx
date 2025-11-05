import { lazy, Suspense } from "react";

const Home = lazy(() => import("../App"));
const Register = lazy(() => import("../pages/register"));
const ForgotPassword = lazy(() => import("../pages/forgot-passowrd"));

export const appRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
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
    path: "/forgotpass",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ForgotPassword />
      </Suspense>
    ),
  },
];

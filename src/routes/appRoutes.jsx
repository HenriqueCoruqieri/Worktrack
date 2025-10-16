import { lazy, Suspense } from "react";

const Home = lazy(() => import("../App"));

export const appRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
];

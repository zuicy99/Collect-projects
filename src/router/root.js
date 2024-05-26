import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainPage = lazy(() => import("../pages/main/MainPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <MainPage />
      </Suspense>
    ),
    // children: signRouter(),
  },
]);

export default router;

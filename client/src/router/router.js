import { createBrowserRouter } from "react-router-dom";
import { HomePage, ErrorPage } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    }
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Index from "./pages/Home";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "", element: <Index /> },
            {path: "login", element: <LoginPage /> },
        ],

        errorElement: <NotFound />
    }
]);

export { router }
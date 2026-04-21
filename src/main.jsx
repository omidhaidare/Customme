import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";
import "./styles/index.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
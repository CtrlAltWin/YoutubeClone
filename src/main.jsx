import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainContainer/> },
      { path: "/watch", element: <WatchPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
 <RouterProvider router={appRouter}/>
);

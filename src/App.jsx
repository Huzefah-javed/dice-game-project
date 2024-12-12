import { createBrowserRouter, RouterProvider } from "react-router"
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";



export const App =()=> {

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/game",
      element: <Game />,
    },
  ]);
  
    return (
      <RouterProvider router={router} />
    );
  
}
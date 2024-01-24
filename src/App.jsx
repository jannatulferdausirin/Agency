import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/layouts/Home";
import About from "./components/About";
import Service from "./components/Service";
import Carrier from "./components/Carrier";
import Contact from "./components/Contact";
import NotFound from "./NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
          {
            path: "/home",
          element: <Home />,
          },
          {
            path: "/about",
          element: <About/>,
          },
          {
            path: "/service",
          element: <Service/>,
          },
          {
            path: "/carriers",
          element: <Carrier/>,
          },
          {
            path: "/contacts",
          element: <Contact/>,
          },
      
      ],
    },
    {
      path: "*",
      element:<NotFound/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

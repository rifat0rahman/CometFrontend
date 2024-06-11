import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../../HomeComponents/HomeRoot";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../../HomeComponents/Home/Home";
import DeshboardRoot from "../../DeshboardComponents/DeshboardRoot";
import MyContent from "../../DeshboardComponents/userDeshboard/MyContent/MyContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/",
    element: <DeshboardRoot></DeshboardRoot>,
    children: [
      {
        path: "/my_content",
        element: <MyContent></MyContent>,
      },
    ],
  },
]);

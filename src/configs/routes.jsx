import MainLayout from "../layouts/MainLayout";
import PATH from "./paths/PATH";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import TermsAndConditions from "../pages/TermsAndConditions";
import HowToGetSpin from "../pages/HowToGetSpin";
import ListWinner from "../pages/ListWinner";
import PrizeCode from "../pages/PrizeCode";
import Login from "../pages/Login";

const routes = [
  {
    path: PATH.HOME,
    element: <MainLayout />,
    children: [
      {
        path: PATH.HOME,
        element: <Home />,
      },
      {
        path: PATH.MY_TICKET,
        element: <PrizeCode />,
      },
      {
        path: PATH.LIST_WINNER,
        element: <ListWinner />,
      },
      {
        path: PATH.HOW_TO_GET_TICKET,
        element: <HowToGetSpin />,
      },
      {
        path: PATH.TERMS_AND_CONDITIONS,
        element: <TermsAndConditions />,
      },
    ],
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;

import { routerType } from "../types/router.types";
import Collection from "./collection/Collection";
import Cards from "./cards/Cards";
import Expansion from "./expansion/Expansion";
import Homepage from "./homepage/Homepage";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Homepage />,
    title: "homepage",
  },
  {
    path: "/collection",
    element: <Collection />,
    title: "collection",
  },

  {
    path: "/expansions",
    element: <Expansion />,
    title: "expansions",
  },
  {
    path: "/cards",
    element: <Cards />,
    title: "cards",
  },
];

export default pagesData;

import { routerType } from "../types/router.types";
import Collection from "./collection/Collection";
import Cards from "./cards/Cards";
import Marketplace from "./marketplace/Marketplace";
import Homepage from "./Homepage/homepage";

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
    path: "/cards",
    element: <Cards />,
    title: "cards",
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
    title: "marketplace",
  },
];

export default pagesData;

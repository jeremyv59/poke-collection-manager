import { routerType } from "../types/router.types";
import Homepage from "./Homepage";
import Collection from "./Collection";
import Cards from "./Cards";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Homepage />,
    title: "homepage",
  },
  {
    path: "collection",
    element: <Collection />,
    title: "collection",
  },
  {
    path: "cards",
    element: <Cards />,
    title: "cards",
  },
];

export default pagesData;

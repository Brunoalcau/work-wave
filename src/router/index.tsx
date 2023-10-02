import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { useBatches } from "../provider/BatchesProvider";
import RoutePrivate from "./private";
import RoutePublic from "./public";


const Route = () => {
  const { jobs } = useBatches();
  const router = createBrowserRouter( jobs.length === 0 ? RoutePublic(): RoutePrivate())
  return <RouterProvider router={router} />
};

export default Route;
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { useBatches } from "../provider/BatchesProvider";
import RoutePrivate from "./private";


const Route = () => {
  const { jobs } = useBatches();
  const router = createBrowserRouter(RoutePrivate())
  return <RouterProvider router={router} />
};

export default Route;
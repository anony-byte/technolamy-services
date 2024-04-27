import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking";
import Gallery from "../components/Gallery";
import Home from "../components/main/Home";
import ArtCentre from "../pages/ArtCentre";
import ExplorePage from "../pages/ExplorePage";
import OilPaintings from "../pages/OilPaintings";
import WebServices from "../pages/WebServices";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/explore",
        element: <ExplorePage />
      },
      {
        path: "/oil-paintings",
        element: <OilPaintings />,
        children: [{ path: ":id", element: <Gallery /> }],
      },
      {
        path: "/art-centre",
        element: <ArtCentre />,
        children: [{ path: ":id", element: <Gallery /> }],
      },
      {
        path: "/web-services",
        element: <WebServices />,
      },
    ],
  },
  { path: "/booking", element: <Booking /> },
]);

export default Routes;

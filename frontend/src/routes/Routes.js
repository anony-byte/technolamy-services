import { createBrowserRouter } from "react-router-dom";
import Home from "../components/main/Home";
import ArtCentre from "../pages/ArtCentre";
import OilPaintings from "../pages/OilPaintings";

const Routes = createBrowserRouter([
    {path: "/", element: <Home/>, children: [
        {path: "/oil-paintings", element: <OilPaintings/>},
        {path: "/art-centre", element: <ArtCentre/>}
    ]}
])

export default Routes;
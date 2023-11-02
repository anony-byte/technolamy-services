import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking";
import Gallery from "../components/Gallery";
import Home from "../components/main/Home";
import Modal from "../components/Modal";
import ArtCentre from "../pages/ArtCentre";
import OilPaintings from "../pages/OilPaintings";

const Routes = createBrowserRouter([
    {path: "/", element: <Home/>, children: [
        {path: "/oil-paintings", element: <OilPaintings/>, children: [
            {path: "booking", element: <Modal><Booking/></Modal>},
            {path: ":id", element: <Gallery/>}
        ]},
        {path: "/art-centre", element: <ArtCentre/>, children: [
            {path: ":id", element: <Gallery/>},
            {path: "booking", element: <Modal><Booking/></Modal>}
        ]}
    ]},
    {path: "/booking", element: <Booking/>}
])

export default Routes;
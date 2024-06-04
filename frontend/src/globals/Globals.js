import ImportImages from "./ImageImport";

export const canvas = [
  {
    name: "wall decor paintings",
    width: "50%",
    height: "50%",
  },
  {
    name: "Family portrait paintings",
    width: "50%",
    height: "50%",
  },
  {
    name: "self portraits",
    width: "50%",
    height: "50%",
  },
];

export const mainPageRoutes = ["", "explore", "about%20us"];


const filenames = ImportImages("ArtCentreImages");

export const artCentreHeaderServices = [
  {
    name: "tattoo studio",

    textColor: "white",
    description:
      "At Technolamy, we specialize in transforming your visions into remarkable inked masterpieces. Our skilled artists are here to make your tattoo dreams a reality, ensuring that each design tells a unique and compelling story.",
    image: filenames[1],
  },
  {
    name: "wrapping works",
    image: filenames[2],
    textColor: "white",
    description:
      "Upgrade your vehicle's look with Technolamy Wraps. We're experts at turning cars, motorcycles, and more into stunning works of art. Explore our options and see your ride transform from the ordinary to the extraordinary.",
  },
  {
    name: "stickering",
    image: filenames[0],
    textColor: "white",
    description:
      "Elevate your ride with Technolamy. We specialize in bike stickers and custom number plate designs that add a touch of uniqueness to your motorcycle. Explore our creative solutions and make your bike stand out on the road",
  },
];
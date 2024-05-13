const importAll = (r) => r.keys().map(r);

const ImportImages = pathType => {
    var fileNames;
    if(pathType === "WebServiceImages"){
        fileNames = importAll(
            require.context(
                "../resources/webservicesimages/",
              false,
              /\.(png|jpe?g|svg|webp)$/
            )
          );
    }else if(pathType === "Images"){
        fileNames = importAll(
            require.context(
                "../resources/images/",
              false,
              /\.(png|jpe?g|svg|webp)$/
            )
          );
    } else if(pathType === "ArtCentreImages"){
        fileNames = importAll(
            require.context(
                "../resources/artcentreimages/",
              false,
              /\.(png|jpe?g|svg|webp)$/
            )
          );
    } else if(pathType === "ExploreImages"){
        fileNames = importAll(
            require.context(
                "../resources/exploreimages/",
              false,
              /\.(png|jpe?g|svg|webp)$/
            )
          );
    }
    return fileNames;
}

export default ImportImages;
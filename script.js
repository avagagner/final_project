require(["esri/views/MapView",
          "esri/WebMap","esri/widgets/Legend", ], (MapView, WebMap, Legend) => {
        /************************************************************
         * Creates a new WebMap instance. A WebMap must reference
         * a PortalItem ID that represents a WebMap saved to
         * arcgis.com or an on-premise portal.
         *
         * To load a WebMap from an on-premise portal, set the portal
         * url with esriConfig.portalUrl.
         ************************************************************/
        const webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "d74d693132ce4e8abb617b1b4b74a825"
          }
        });

        /************************************************************
         * Set the WebMap instance to the map property in a MapView.
         ************************************************************/
        const view = new MapView({
          map: webmap,
          container: "viewDiv"
        });
   
   view.when(() => {
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
          const featureLayer = webmap.layers.getItemAt(1);

          const legend = new Legend({
            view: view,
            layerInfos: [
              {
                layer:  featureLayer,
                title: "City Size"
    
              }
            ]
          });

          // Add widget to the bottom right corner of the view
          view.ui.add(legend, "bottom-right");
        });
    view.when(() => {
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
          const featureLayer = webmap.layers.getItemAt(0);

          const legend = new Legend({
            view: view,
            layerInfos: [
              {
                layer:  featureLayer,
                title: "April Housing Prices"
    
              }
            ]
          });

          // Add widget to the bottom right corner of the view
          view.ui.add(legend, "top-right");
        });
      });

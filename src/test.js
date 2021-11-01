const layers = layersOrder.map((layerObj, index) => ({
    id: index,
    elements: getElements(`${layersDir}/${layerObj.name}/`),
    name:  
    layerObj.options? (layerObj.options["displayName"] != undefined ? layerObj.options["displayName"]: layerObj.name) : layerObj.name,
    
    blend:
      layerObj.options? (layerObj.options["blend"] != undefined ? layerObj.options["blend"]: "source-over") : "source-over",
    
    opacity:
      layerObj.options? (layerObj.options["opacity"] != undefined ? layerObj.options["opacity"]: 1) :1,
  }));
  return layers;
};
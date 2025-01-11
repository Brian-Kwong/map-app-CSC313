import './style.css';
import {Feature, Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import {Point } from 'ol/geom';
import { Vector } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import {Circle, Fill, Stroke, Style} from 'ol/style.js';
import * as cities from "./cordinates.js"


const view = new View({
  center: fromLonLat(cities.cal_poly),
  zoom: 8 // Sets the default zoom level
})
const point = new Point(
  fromLonLat(slo)
)

const fill = new Fill({
  color: "#FF0000"
});

const stroke = new Stroke({
  color: '#3399CC',
  width: 1.25,
});


const point_layer = new Vector({
  source: new VectorSource({
    features: [ new Feature({
      geometry: point
    })]
  }),
  style : new Style({
    image : new Circle({
      fill : fill,
      stroke : stroke,
      radius : 25
    }),
    fill : fill,
    stroke : stroke
  })
}
)

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(
      )
    })
  ],
  view: view
})
map.addLayer(point_layer)

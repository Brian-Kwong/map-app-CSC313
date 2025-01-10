import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {toStringHDMS} from 'ol/coordinate.js';


const slo = [35.30509299785206, -120.66261252029449] 
const view = new View({
  center: [0, 0],
  zoom: 3
})

view.adjustCenter(slo)
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: view
})

import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { createPoint, MAP_TYPE } from './point_factory';
import XYZ from 'ol/source/XYZ';

const cities = await import('./population.json').then(({ default: cities }) => {
  return cities;
});

const view = new View({
  center: fromLonLat([cities[0].longitude, cities[0].latitude], MAP_TYPE), // Sets the default center of the map
  zoom: 8, // Sets the default zoom level
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      }),
    }),
  ],
  view: view,
});

cities.forEach((city) => {
  map.addLayer(createPoint([city.longitude, city.latitude], city.population));
});

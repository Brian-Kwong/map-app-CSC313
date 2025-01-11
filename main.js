import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { createPoint } from './point_factory';

const cities = await fetch('./population.json')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    alert('Unable to find city data.' + error);
  });

const view = new View({
  center: fromLonLat([cities[0].longitude, cities[0].latitude]), // Sets the default center of the map
  zoom: 8, // Sets the default zoom level
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: view,
});

cities.forEach((city) => {
  map.addLayer(createPoint([city.longitude, city.latitude], city.population));
});

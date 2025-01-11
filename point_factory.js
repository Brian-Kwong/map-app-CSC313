import { Circle, Fill, Stroke, Style } from 'ol/style.js';
import { Vector } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { Feature } from 'ol';
import { fromLonLat } from 'ol/proj';

// Stroke for all points
const stroke = new Stroke({
  color: '#000000',
  width: 1.25,
});

// The following function creates a Point given a geographic coordinate.
export function createPoint(coordinate, population_size) {
  let radius = 0;
  let color = '#000000';
  switch (population_size) {
    case 0:
      radius = 5;
      color = '#4197CC';
      break;
    case 1:
      radius = 10;
      color = '#F7E06D';
      break;
    case (2, 3, 4):
      radius = 15;
      color = '#F7896D';
      break;
    default:
      radius = 30;
      color = '#E882C1';
      break;
  }

  const fill = new Fill({
    color: color,
  });

  return new Vector({
    source: new VectorSource({
      // Creates the point
      features: [
        new Feature({
          geometry: new Point(fromLonLat(coordinate)),
        }),
      ],
    }),
    style: new Style({
      // Styles the point
      image: new Circle({
        fill: fill,
        stroke: stroke,
        radius: radius,
      }),
      fill: fill,
      stroke: stroke,
    }),
  });
}

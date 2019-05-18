import {LatLng, LatLngBoundsExpression, LatLngExpression} from 'leaflet';

export class Position {

    polygon: LatLngExpression[][][];

    polyline: LatLngExpression[][];

    envelope: LatLngBoundsExpression;
}

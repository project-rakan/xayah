import { Coordinate } from "../types";

export const coordToNormalCart = (
    vertex: Coordinate,
    origin: Coordinate,
    max: Coordinate
): [number, number] => {
    // http://www.movable-type.co.uk/scripts/latlong.html
    // TODO Must credit above source
    const φOrigin = (origin.lat * Math.PI) / 180; // φ, λ in radians
    const φVertex = (vertex.lat * Math.PI) / 180;
    const φMax = (max.lat * Math.PI) / 180;
    const λOrigin = (origin.lng * Math.PI) / 180;
    const λVertex = (vertex.lng * Math.PI) / 180;
    const λMax = (max.lng * Math.PI) / 180;

    const xMax = (λMax - λOrigin) * Math.cos((φOrigin + φMax) / 2);
    const yMax = φMax - φOrigin;

    const xVertex = (λVertex - λOrigin) * Math.cos((φOrigin + φVertex) / 2);
    const yVertex = φVertex - φOrigin;

    return [xVertex / xMax, yVertex / yMax];
};

export const getSize = (
    origin: Coordinate,
    max: Coordinate,
    zoom: number
): { height: number; width: number } => {
    // https://groups.google.com/forum/#!topic/google-maps-js-api-v3/hDRO4oHVSeM
    // TODO Must credit above source
    const metersPerPx =
        (156543.03392 *
            Math.cos((((origin.lat + max.lat) / 2) * Math.PI) / 180)) /
        Math.pow(2, zoom);
    // http://www.movable-type.co.uk/scripts/latlong.html
    // TODO Must credit above source
    const R = 6371e3; // metres
    const φOrigin = (origin.lat * Math.PI) / 180; // φ, λ in radians
    const φMax = (max.lat * Math.PI) / 180;
    const λOrigin = (origin.lng * Math.PI) / 180;
    const λMax = (max.lng * Math.PI) / 180;

    const xMax = (λMax - λOrigin) * Math.cos((φOrigin + φMax) / 2) * R;
    const yMax = (φMax - φOrigin) * R;

    const xPx = Math.abs(Math.round(xMax / metersPerPx));
    const yPx = Math.abs(Math.round(yMax / metersPerPx));

    return { height: yPx, width: xPx };
};

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const pointsToPath = (points:unknown[][]) => [
  points
    .map((point, iPoint) => [iPoint > 0 ? 'L' : 'M', point[0], ' ', point[1]].join(''))
    .join(' '),
  'Z',
].join('');

const rotatePoint = (point:number[], angle:number, origin:number[]) => {
  const radians = (angle * Math.PI) / 180;
  const x = point[0] - origin[0];
  const y = point[1] - origin[1];
  const x1 = x * Math.cos(radians) - y * Math.sin(radians) + origin[0];
  const y1 = x * Math.sin(radians) + y * Math.cos(radians) + origin[1];
  return [x1, y1];
};

const rotatePoints = (points: number[][], angle: number, origin:number[]) => points.map(point => rotatePoint(point, angle, origin));

const restrictToRange = (val:number, min:number, max: number) => {
  if (val < min) return min;
  if (val > max) return max;
  return val;
};

// eslint-disable-next-line no-restricted-globals
const mapEcoPoint = (point:number, scale:number) => (isNaN(point) ? point : point * scale);

export {
  pointsToPath, rotatePoint, rotatePoints, restrictToRange, mapEcoPoint,
};

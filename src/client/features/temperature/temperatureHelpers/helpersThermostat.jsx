const pointsToPath = (points) => {
  return [
    points
      .map((point, iPoint) =>
        [iPoint > 0 ? "L" : "M", point[0], " ", point[1]].join("")
      )
      .join(" "),
    "Z",
  ].join("");
};

const rotatePoint = (point, angle, origin) => {
  const radians = (angle * Math.PI) / 180;
  const x = point[0] - origin[0];
  const y = point[1] - origin[1];
  const x1 = x * Math.cos(radians) - y * Math.sin(radians) + origin[0];
  const y1 = x * Math.sin(radians) + y * Math.cos(radians) + origin[1];
  return [x1, y1];
};

const rotatePoints = (points, angle, origin) => {
  return points.map((point) => rotatePoint(point, angle, origin));
};

const restrictToRange = (val, min, max) => {
  if (val < min) return min;
  if (val > max) return max;
  return val;
};

const mapEcoPoint = (point, scale) => {
  return isNaN(point) ? point : point * scale;
};

export { pointsToPath, rotatePoint, rotatePoints, restrictToRange, mapEcoPoint }
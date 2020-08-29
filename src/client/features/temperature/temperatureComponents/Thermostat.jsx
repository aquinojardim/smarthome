import React from 'react';
import { useSelector } from 'react-redux';

export default function Thermostat (props) {
  const { temperature, targetTemperature, eco } = useSelector((state) => state);


  const getStyles = () => {
    let dialColor = '#222';

    return {
      dial: {
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      },
      circle: {
        fill: dialColor,
        WebkitTransition: 'fill 0.5s',
        transition: 'fill 0.5s',
      },
      target: {
        fill: 'white',
        textAnchor: 'middle',
        fontFamily: 'Helvetica, sans-serif',
        alignmentBaseline: 'central',
        fontSize: '120px',
        fontWeight: 'bold',
        visibility: 'visible',
      },
      ambient: {
        fill: 'white',
        textAnchor: 'middle',
        fontFamily: 'Helvetica, sans-serif',
        alignmentBaseline: 'central',
        fontSize: '22px',
        fontWeight: 'bold',
      },
      eco: {
        fill: '#13EB13',
        opacity: (eco ? '1' : '0'),
        visibility: 'visible',
        WebkitTransition: 'opacity 0.5s',
        transition: 'opacity 0.5s',
        pointerEvents: 'none',
      },
    };
  }

  const pointsToPath = (points) => {
    return [points.map(
      (point, iPoint) => [(iPoint > 0 ? 'L' : 'M'), point[0], ' ', point[1]].join('')
    ).join(' '), 'Z'].join('');
  }

  const rotatePoint = (point, angle, origin) => {
    const radians = angle * Math.PI / 180;
    const x = point[0] - origin[0];
    const y = point[1] - origin[1];
    const x1 = x * Math.cos(radians) - y * Math.sin(radians) + origin[0];
    const y1 = x * Math.sin(radians) + y * Math.cos(radians) + origin[1];
    return [x1, y1];
  }

  const rotatePoints = (points, angle, origin) => {
    return points.map(
      (point) => rotatePoint(point, angle, origin)
    );
  }

  const restrictToRange = (val, min, max) => {
    if (val < min) return min;
    if (val > max) return max;
    return val;
  }

  const mapEcoPoint = (point, scale) => {
    return isNaN(point) ? point : point * scale;
  }

  // Local variables used for rendering.
  const diameter = 400;
  const radius = diameter / 2;
  const ticksOuterRadius = diameter / 30;
  const ticksInnerRadius = diameter / 8;
  const tickDegrees = 300;
  const rangeValue = props.maxValue - props.minValue;

  // Determine the maximum and minimum values to display.
  let actualMinValue;
  let actualMaxValue;
    actualMinValue = Math.min(temperature, targetTemperature);
    actualMaxValue = Math.max(temperature, targetTemperature);
  const min = restrictToRange(Math.round((actualMinValue - props.minValue)
      / rangeValue * props.numTicks), 0, props.numTicks - 1);
    const max = restrictToRange(Math.round((actualMaxValue - props.minValue)
      / rangeValue * props.numTicks), 0, props.numTicks - 1);

    // Renders the degree ticks around the outside of the thermostat.
    const tickPoints = [
      [radius - 1, ticksOuterRadius],
      [radius + 1, ticksOuterRadius],
      [radius + 1, ticksInnerRadius],
      [radius - 1, ticksInnerRadius],
    ];
    const tickPointsLarge = [
      [radius - 1.5, ticksOuterRadius],
      [radius + 1.5, ticksOuterRadius],
      [radius + 1.5, ticksInnerRadius + 20],
      [radius - 1.5, ticksInnerRadius + 20],
    ];
    const theta = tickDegrees / props.numTicks;
    const offsetDegrees = 180 - (360 - tickDegrees) / 2;
    const tickArray = [];
    for (let iTick = 0; iTick < props.numTicks; iTick++) {
      const isLarge = iTick === min || iTick === max;
      const isActive = iTick >= min && iTick <= max;
      const tickElement = React.createElement('path', {
        key: ['tick-', iTick].join(''),
        d: pointsToPath(
          rotatePoints(
            isLarge ? tickPointsLarge : tickPoints,
            iTick * theta - offsetDegrees,
            [radius, radius])),
        style: {
          fill: isActive ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
        },
      });
      tickArray.push(tickElement);
    }

    // Determines the positioning of the eco, should it be displayed.
    const ecoScale = radius / 5 / 100;
    const ecoDef = ['M', 3, 84, 'c', 24, 17, 51, 18, 73, -6, 'C', 100, 52, 100,
      22, 100, 4, 'c', -13, 15, -37, 9, -70, 19, 'C', 4, 32, 0, 63, 0, 76, 'c',
      6, -7, 18, -17, 33, -23, 24, -9, 34, -9, 48, -20, -9, 10, -20, 16, -43, 24,
      'C', 22, 63, 8, 78, 3, 84, 'z',
    ].map(
      (point) => mapEcoPoint(point, ecoScale)
    ).join(' ');
    const translate = [radius - (ecoScale * 100 * 0.5), radius * 1.5];

    // Determines whether the ambient temperature label will be displayed
    // to the left or right of the tick range.
    const lblAmbientPosition = [
      radius,
      ticksOuterRadius - (ticksOuterRadius - ticksInnerRadius) / 2,
    ];
    const peggedValue = restrictToRange(
      temperature,
      props.minValue,
      props.maxValue);
    let degs = tickDegrees * (peggedValue - props.minValue) / rangeValue - offsetDegrees;
    if (peggedValue > targetTemperature) {
      degs += 8;
    } else {
      degs -= 8;
    }
    const ambientPosition = rotatePoint(lblAmbientPosition, degs, [radius, radius]);

    // The styles change based on state.
    const styles = getStyles();

    // Piece it all together to form the thermostat display.
    return (
      <svg width={props.width} height={props.height} style={styles.dial}
        viewBox={['0 0 ', diameter, ' ', diameter].join('')}
      >
        <circle cx={radius} cy={radius} r={radius} style={styles.circle}></circle>
        <g>{tickArray}</g>
        <text x={radius} y={radius} style={styles.target}>
          {Math.round(targetTemperature)}
        </text>
        <text x={ambientPosition[0]} y={ambientPosition[1]} style={styles.ambient}>
          {Math.round(temperature)}
        </text>
        <path d={ecoDef} style={styles.eco}
          transform={['translate(', translate[0], ',', translate[1], ')'].join('')}
        ></path>
      </svg>
    );
}
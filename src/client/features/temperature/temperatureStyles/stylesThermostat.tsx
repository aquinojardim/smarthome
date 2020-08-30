import { typesStylesThermostat } from '../temperatureTypes/typesStylesThermostat';

const stylesThermostat = (eco:boolean):typesStylesThermostat => {
  const dialColor = '#222';

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
      opacity: eco ? '1' : '0',
      visibility: 'visible',
      WebkitTransition: 'opacity 0.5s',
      transition: 'opacity 0.5s',
      pointerEvents: 'none',
    },
  };
};

export { stylesThermostat as default };

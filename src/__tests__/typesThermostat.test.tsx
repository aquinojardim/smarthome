import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { typesThermostat } from '../client/features/temperature/temperatureTypes/typesThermostat';

configure({ adapter: new Adapter() });

describe('typesThermostat interface', () => {
  it('Should exist', () => {
    const interfaceTest:typesThermostat = {
      height: 'string',
      width: 'string',
      numTicks: 0,
      minValue: 0,
      maxValue: 0,
    };
    expect(interfaceTest).toBeTruthy();
  });
});

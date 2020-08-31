import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { typesStylesThermostat } from '../client/features/temperature/temperatureTypes/typesStylesThermostat';

configure({ adapter: new Adapter() });

describe('typesStylesThermostat interface', () => {
  it('Should exist', () => {
    const interfaceTest:typesStylesThermostat = {
      dial: {},
      circle: {},
      target: {},
      ambient: {},
      eco: {},
    };
    expect(interfaceTest).toBeTruthy();
  });
});

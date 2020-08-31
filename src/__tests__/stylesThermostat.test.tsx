import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import stylesThermostat from '../client/features/temperature/temperatureStyles/stylesThermostat';

configure({ adapter: new Adapter() });

describe('stylesThermostat object', () => {
  it('Should exist', () => {
    expect(stylesThermostat).toBeTruthy();
    expect(stylesThermostat).toBeInstanceOf(Function);
  });
});

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Thermostat from '../client/features/temperature/temperatureComponents/Thermostat';

configure({ adapter: new Adapter() });

describe('Thermostat Component', () => {
  it('Should exist', () => {
    expect(Thermostat).toBeTruthy();
  });
});

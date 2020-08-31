import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChangeTemperature from '../client/features/temperature/temperatureComponents/ChangeTemperature';

configure({ adapter: new Adapter() });

describe('ChangeTemperature Component', () => {
  it('Should exist', () => {
    expect(ChangeTemperature).toBeTruthy();
  });
});

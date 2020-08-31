import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TemperaturePanel from '../client/features/temperature/TemperaturePanel';

configure({ adapter: new Adapter() });

describe('TemperaturePanel Component', () => {
  it('Should exist', () => {
    expect(TemperaturePanel).toBeTruthy();
  });
});

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import stylesChangeTemperature from '../client/features/temperature/temperatureStyles/stylesChangeTemperature';

configure({ adapter: new Adapter() });

describe('stylesChangeTemperature object', () => {
  it('Should exist', () => {
    expect(stylesChangeTemperature).toBeTruthy();
    expect(stylesChangeTemperature).toBeInstanceOf(Function);
  });
});

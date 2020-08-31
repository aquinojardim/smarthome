import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { generateMarks } from '../client/features/temperature/temperatureHelpers/helpersChangeTemperature';

configure({ adapter: new Adapter() });

describe('generateMarks function', () => {
  it('Should exist', () => {
    expect(generateMarks).toBeTruthy();
  });
});

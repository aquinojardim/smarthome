/* eslint-disable jest/no-disabled-tests */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { generateMarks, valueText } from '../client/features/temperature/temperatureHelpers/helpersChangeTemperature';

configure({ adapter: new Adapter() });

describe('generateMarks function', () => {
  const test = jest.fn(generateMarks);
  const result = test();
  it('Should exist', () => {
    expect(generateMarks).toBeTruthy();
  });
  it('Result should be an array', () => {
    expect(result).toHaveLength(10);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([{ label: '0°', value: 0 }, { label: '10°', value: 10 }, { label: '20°', value: 20 }, { label: '30°', value: 30 }, { label: '40°', value: 40 }, { label: '50°', value: 50 }, { label: '60°', value: 60 }, { label: '70°', value: 70 }, { label: '80°', value: 80 }, { label: '90°', value: 90 }]);
  });
});

describe('valueText function', () => {
  const test = jest.fn(valueText);
  const result = test(3);
  it('Should exist', () => {
    expect(valueText).toBeTruthy();
  });
  it('Result should be an string', () => {
    expect(result).toHaveLength(2);
    expect(result).toEqual('3°');
  });
});

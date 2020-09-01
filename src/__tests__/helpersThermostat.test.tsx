/* eslint-disable jest/no-disabled-tests */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  pointsToPath, rotatePoint, rotatePoints, restrictToRange, mapEcoPoint,
} from '../client/features/temperature/temperatureHelpers/helpersThermostat';

configure({ adapter: new Adapter() });

describe('pointsToPath function', () => {
  const test = jest.fn(pointsToPath);
  const result = test([[3, 1]]);
  it('Should exist', () => {
    expect(pointsToPath).toBeTruthy();
  });
  it('Result should be an string', () => {
    expect(result).toHaveLength(5);
    expect(result).toMatch('M3 1Z');
  });
});

describe('rotatePoint function', () => {
  const test = jest.fn(rotatePoint);
  const result = test([1, 2, 3], 1, [1, 2, 3]);
  it('Should exist', () => {
    expect(rotatePoint).toBeTruthy();
  });
  it('Result should be an array', () => {
    expect(result).toHaveLength(2);
    expect(result).toEqual([1, 2]);
    expect(result).toBeInstanceOf(Array);
  });
});

describe('rotatePoints function', () => {
  const test = jest.fn(rotatePoints);
  const result = test([[1, 2, 3]], 1, [1, 2, 3]);
  it('Should exist', () => {
    expect(rotatePoints).toBeTruthy();
  });
  it('Result should be an array', () => {
    expect(result).toHaveLength(1);
    expect(result).toEqual([[1, 2]]);
    expect(result).toBeInstanceOf(Array);
  });
});

describe('restrictToRange function', () => {
  const test = jest.fn(restrictToRange);
  const result = test(1, 2, 3);
  it('Should exist', () => {
    expect(restrictToRange).toBeTruthy();
  });
  it('Result should be an number', () => {
    expect(result).toEqual(2);
  });
});

describe('mapEcoPoint function', () => {
  const test = jest.fn(mapEcoPoint);
  const result = test(1, 2);
  it('Should exist', () => {
    expect(mapEcoPoint).toBeTruthy();
  });
  it('Result should be an number', () => {
    expect(result).toEqual(2);
  });
});

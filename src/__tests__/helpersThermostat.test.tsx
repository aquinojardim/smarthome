import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  pointsToPath, rotatePoint, rotatePoints, restrictToRange, mapEcoPoint,
} from '../client/features/temperature/temperatureHelpers/helpersThermostat';

configure({ adapter: new Adapter() });

describe('pointsToPath function', () => {
  it('Should exist', () => {
    expect(pointsToPath).toBeTruthy();
  });
});

describe('rotatePoint function', () => {
  it('Should exist', () => {
    expect(rotatePoint).toBeTruthy();
  });
});

describe('rotatePoints function', () => {
  it('Should exist', () => {
    expect(rotatePoints).toBeTruthy();
  });
});

describe('restrictToRange function', () => {
  it('Should exist', () => {
    expect(restrictToRange).toBeTruthy();
  });
});

describe('mapEcoPoint function', () => {
  it('Should exist', () => {
    expect(mapEcoPoint).toBeTruthy();
  });
});

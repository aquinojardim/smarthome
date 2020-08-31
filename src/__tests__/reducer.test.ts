import { reducer, initialState } from '../client/reducer/reducer';

describe('reducer', () => {
  it('Should exist', () => {
    expect(reducer).toBeTruthy();
    expect(reducer).toBeInstanceOf(Function);
  });
});

describe('initialState', () => {
  const initialStateMock = {
    lightCount: 0,
    lights: {},
    temperature: 0,
    targetTemperature: 0,
    eco: false,
  };

  it('Should exist', () => {
    expect(initialState).toBeTruthy();
    expect(reducer).toBeInstanceOf(Object);
  });

  it('Should never mutate', () => {
    expect(initialState).toEqual(initialStateMock);
  });
});

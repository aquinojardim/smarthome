import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
import {
  getState,
  allLights,
  updateLight,
  deleteLight,
  updateTarget,
  updateTemperature,
  reset,
} from '../client/reducer/actions/actions';
import { reducer, initialState } from '../client/reducer/reducer';

const initialStateMock = {
  lightCount: 0,
  lights: {},
  temperature: 0,
  targetTemperature: 0,
  eco: false,
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialStateMock);

describe('reducer', () => {
  it('Should exist', () => {
    expect(reducer).toBeTruthy();
    expect(reducer).toBeInstanceOf(Function);
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, reset())).toEqual(initialStateMock);
  });
});

describe('initialState', () => {
  it('Should exist', () => {
    expect(initialState).toBeTruthy();
    expect(reducer).toBeInstanceOf(Object);
  });

  it('Should never mutate', () => {
    expect(initialState).toEqual(initialStateMock);
  });
});

describe('test action get state', () => {
  const payload = {
    temperature: 7,
    eco: true,
    lights: {
      1: {
        name: 'test',
        status: true,
      },
    },
  };
  store.dispatch(getState(payload));
  const action0 = store.getActions();
  it('action should have type get state ', () => {
    expect(action0[0].type).toEqual('getState');
  });
  it('action should have a payload ', () => {
    expect(action0[0].payload).toEqual(payload);
  });
});

describe('test action all lights', () => {
  const payload = false;
  store.dispatch(allLights(payload));
  const action1 = store.getActions();
  it('action should have type all lights ', () => {
    expect(action1[1].type).toEqual('allLights');
  });
  it('action should have a payload ', () => {
    expect(action1[1].payload).toEqual(payload);
  });
});

describe('test action update light', () => {
  const payload = {
    id: 2,
    value: {
      name: 'test',
      status: true,
    },
  };
  store.dispatch(updateLight(payload));
  const action2 = store.getActions();
  it('action should have type update light ', () => {
    expect(action2[2].type).toEqual('updateLight');
  });
  it('action should have a payload ', () => {
    expect(action2[2].payload).toEqual(payload);
  });
});

describe('test action delete light', () => {
  const payload = 2;
  store.dispatch(deleteLight(payload));
  const action3 = store.getActions();
  it('action should have type light ', () => {
    expect(action3[3].type).toEqual('deleteLight');
  });
  it('action should have a payload ', () => {
    expect(action3[3].payload).toEqual(payload);
  });
});

describe('test action update target', () => {
  const payload = 2;
  store.dispatch(updateTarget(payload));
  const action4 = store.getActions();
  it('action should have type update target ', () => {
    expect(action4[4].type).toEqual('updateTarget');
  });
  it('action should have a payload ', () => {
    expect(action4[4].payload).toEqual(payload);
  });
  it('should handle action update target', () => {
    expect(
      reducer(undefined, {
        type: 'updateTarget',
        payload: 33,
      }),
    ).toEqual(
      {
        lightCount: 0,
        lights: {},
        temperature: 0,
        targetTemperature: 33,
        eco: false,
      },
    );
  });
});

describe('test action update temperature', () => {
  const payload = {
    temperature: 10,
    eco: false,
  };
  store.dispatch(updateTemperature(payload));
  const action5 = store.getActions();
  // afterEach(() => {
  //   fetchMock.restore();
  // });
  it('action should have type update temperature ', () => {
    expect(action5[5].type).toEqual('updateTemperature');
  });
  it('action should have a payload ', () => {
    expect(action5[5].payload).toEqual(payload);
  });
  // it('reducer should handle action update temperature', () => {
  //   expect(
  //     reducer(undefined, {
  //       type: 'updateTemperature',
  //       payload,
  //     }),
  //   ).toEqual(
  //     {
  //       lightCount: 0,
  //       lights: {},
  //       temperature: 10,
  //       targetTemperature: 0,
  //       eco: false,
  //     },
  //   );
  // });
});

describe('test action reset', () => {
  store.dispatch(reset());
  const action6 = store.getActions();
  it('action should have type reset ', () => {
    expect(action6[6].type).toEqual('reset');
  });
  it('reducer should handle action reset', () => {
    expect(
      reducer(undefined, {
        type: 'reset',
      }),
    ).toEqual(
      {
        lightCount: 0,
        lights: {},
        temperature: 0,
        targetTemperature: 0,
        eco: false,
      },
    );
  });
});

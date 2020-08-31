/* eslint-disable no-case-declarations */
import * as types from './constants/actionTypes';
import { actionTypes } from './reducerTypes/typesActionTypes';
import { InitialState } from './reducerTypes/typesReducer';
import postRequest from './reducerHelpers/postRequest';
import deleteRequest from './reducerHelpers/deleteRequest';

// Set initial state
export const initialState:InitialState = {
  lightCount: 0,
  lights: {},
  temperature: 0,
  targetTemperature: 0,
  eco: false,
};

export const reducer = (state = initialState, action: actionTypes): InitialState => {
  // copy all state properties do avoid state mutability
  let lightCountCopy = state.lightCount;
  let lightsCopy:{1?:{name?: string, status?:boolean}} = { ...state.lights };
  let temperatureCopy:number | undefined = state.temperature;
  let targetTemperatureCopy:number | undefined = state.targetTemperature;
  let ecoCopy:boolean | undefined = state.eco;

  switch (action.type) {
    // Update state with payload
    case types.GET_STATE:
      // update local storage
      temperatureCopy = action.payload.temperature;
      targetTemperatureCopy = action.payload.temperature;
      ecoCopy = action.payload.eco;
      lightCountCopy = Object.keys(action.payload.lights).length;
      lightsCopy = action.payload.lights;

      return {
        lightCount: lightCountCopy,
        lights: lightsCopy,
        targetTemperature: targetTemperatureCopy,
        temperature: temperatureCopy,
        eco: ecoCopy,
      };

    case types.ALL_LIGHTS:
      // update local storage
      Object.keys(lightsCopy).forEach(light => {
        lightsCopy[light].status = action.payload;
      });

      // update database
      postRequest('/api', { obj: lightsCopy });

      return {
        ...state,
        lights: lightsCopy,
      };
    case types.UPDATE_LIGHT:
      // update database
      const lightData = {
        obj: {
          id: action.payload.id,
          value: action.payload.value,
        },
      };
      postRequest('/light', lightData);

      // update local storage
      lightsCopy[action.payload.id] = action.payload.value;
      lightCountCopy = Object.keys(lightsCopy).length;

      return {
        ...state,
        lightCount: lightCountCopy,
        lights: lightsCopy,
      };

    case types.DELETE_LIGHT:
      // update database
      const lightDelete = { id: action.payload };
      deleteRequest('/light', lightDelete);

      // update local storage
      delete lightsCopy[action.payload];
      lightCountCopy = Object.keys(lightsCopy).length;

      return {
        ...state,
        lightCount: lightCountCopy,
        lights: lightsCopy,
      };

    case types.UPDATE_TARGET:
      targetTemperatureCopy = action.payload;

      return {
        ...state,
        targetTemperature: targetTemperatureCopy,
      };

    case types.UPDATE_TEMPERATURE:
      // update local storage
      ecoCopy = action.payload.eco;
      if (action.payload.temperature) {
        temperatureCopy = action.payload.temperature;
      }

      // update database
      const temperatureData = {
        obj: {
          eco: ecoCopy,
          temperature: temperatureCopy,
        },
      };
      postRequest('/temperature', temperatureData);

      return {
        ...state,
        temperature: temperatureCopy,
        eco: ecoCopy,
      };

    case types.RESET:
      return initialState;

    default:
      return state;
  }
};

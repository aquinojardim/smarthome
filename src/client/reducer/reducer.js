import * as types from './constants/actionTypes';
import postRequest from '../helpers/postRequest';
import deleteRequest from '../helpers/deleteRequest';

// Set initial state
const initialState = {
  lightCount: 0,
  lights: {},
  temperature: 0,
  targetTemperature: 0,
  eco: false,
};

const reducer = (state = initialState, action) => {
  // copy all state properties do avoid state mutability
  let lightCountCopy = state.lightCount;
  let lightsCopy = {...state.lights};
  let temperatureCopy = state.temperature;
  let targetTemperatureCopy = state.targetTemperature;
  let ecoCopy = state.eco;


  switch (action.type) {
    // Update state with payload
    case types.GET_STATE:
        temperatureCopy = action.payload.temperature;
        targetTemperatureCopy = action.payload.temperature;
        ecoCopy = action.payload.eco;
        lightCountCopy = Object.keys(action.payload.lights).length
        lightsCopy = action.payload.lights;

      return {
        lightCount: lightCountCopy,
        lights: lightsCopy,
        targetTemperature: targetTemperatureCopy,
        temperature: temperatureCopy,
        eco: ecoCopy,
      };

    case types.ALL_LIGHTS:

      for (let light in lightsCopy){
        lightsCopy[light]['status'] = action.payload
      }

      postRequest("/api", {obj: lightsCopy});
  
      return {
        ...state,
        lights: lightsCopy,
      };
    case types.UPDATE_LIGHT:
      const lightData = {obj: {
                      id: action.payload.id,
                      value: action.payload.value
                    }}
      postRequest("/light", lightData);

      lightsCopy[action.payload.id] = action.payload.value
      lightCountCopy = Object.keys(lightsCopy).length
  
      return {
        ...state,
        lightCount: lightCountCopy,
        lights: lightsCopy,
      };

    case types.DELETE_LIGHT:
      const lightDelete = { id: action.payload}
      deleteRequest("/light", lightDelete);
  
      delete lightsCopy[action.payload]
      lightCountCopy = Object.keys(lightsCopy).length
      console.log('lightCountCopy')
    
      return {
        ...state,
        lightCount: lightCountCopy,
        lights: lightsCopy,
      };

    case types.UPDATE_TARGET:             
      targetTemperatureCopy = action.payload;

      return {
        ...state,
        targetTemperature: targetTemperatureCopy
      };

    case types.UPDATE_TEMPERATURE:
      // not connect to backend
      const temperatureData = {obj: {
                                eco: action.payload.eco,
                                temperature: action.payload.temperature
                              }}
      postRequest("/temperature", temperatureData);
       
      ecoCopy = action.payload.eco
      if(action.payload.temperature){
        temperatureCopy = action.payload.temperature
      }
    
      return {
        ...state,
        temperature: temperatureCopy,
        eco: ecoCopy,
      };

    case types.RESET:
      return initialState

    default:
      return state;
  }
};

export default reducer;

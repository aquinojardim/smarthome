import * as types from './constants/actionTypes';
import getRequest from '../helpers/getRequest';
import postRequest from '../helpers/postRequest';
import deleteRequest from '../helpers/deleteRequest';

// Set initial state
const initialState = {
  lightCount: 0,
  lights: {},
  temperature: 0,
  air: false,
};

const reducer = (state = initialState, action) => {
  // copy all state properties do avoid state mutability
  let lightCountCopy = state.lightCount;
  let lightsCopy = {...state.light};
  let temperatureCopy = state.temperature;
  let airCopy = state.air;


  switch (action.type) {
    // Update state with payload
    case types.GET_STATE:
      const data = getRequest("/api/");
      lightCountCopy = Object.keys(data.lights).length
      lightsCopy = data.lights;
      temperatureCopy = data.temperature;
      airCopy = data.air;

      return {
        ...state,
        lightCount: lightCountCopy,
        lights: lightsCopy,
        temperature: temperatureCopy,
        air: airCopy,
      };

    case types.UPDATE_LIGHT:
      const lightData = {obj: {
                      id: action.payload.id,
                      value: action.payload.value
                    }}
      const lightPosted = postRequest("/light/", lightData);

      lightsCopy[action.payload.id] = action.payload.value
      lightCountCopy = Object.keys(lightsCopy).length
  
      return {
        ...state,
        lightCount: lightCountCopy,
        lights: lightsCopy,
      };

    case types.DELETE_LIGHT:
      const lightDelete = { id: action.payload.id }
      const lightDeleted = deleteRequest("/light/", lightDelete);
  
      delete lightsCopy[action.payload.id]
      lightCountCopy = Object.keys(lightsCopy).length
    
      return {
        ...state,
        lightCount: lightCountCopy,
        lights: lightsCopy,
      };

    case types.UPDATE_TEMPERATURE:
      const temperatureData = {obj: {
                                air: action.payload.air,
                                temperature: action.payload.temperature
                              }}
      const temperaturePosted = postRequest("/temperature/", temperatureData);
                              
      airCopy = action.payload.air
      if(action.payload.temperature){
        temperatureCopy = action.payload.temperature
      }
    
      return {
        ...state,
        temperature: temperatureCopy,
        air: airCopy,
      };

    case types.RESET:
      return initialState

    default:
      return state;
  }
};

export default reducer;

import * as types from '../constants/actionTypes';

export const getState = () => ({
    type: types.GET_STATE,
})

export const updateLight = (obj) => ({
  type: types.UPDATE_LIGHT,
  payload: obj,
})

export const deleteLight = (id) => ({
  type: types.DELETE_LIGHT,
  payload: id,
})

export const updateTemperature = (obj) => ({
  type: types.UPDATE_TEMPERATURE ,
  payload: obj,
})

export const reset = () => ({
  type: types.RESET,
});
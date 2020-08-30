import * as types from '../constants/actionTypes';
import { actionTypes } from '../reducerTypes/typesActionTypes';

export const getState = (obj:unknown): actionTypes => ({
  type: types.GET_STATE,
  payload: obj,
});

export const allLights = (boolen:boolean): actionTypes => ({
  type: types.ALL_LIGHTS,
  payload: boolen,
});

export const updateLight = (obj:{
  id: string | number,
  value?: {
    name?: string,
    status?: boolean
  }}): actionTypes => ({
  type: types.UPDATE_LIGHT,
  payload: obj,
});

export const deleteLight = (id:number):actionTypes => ({
  type: types.DELETE_LIGHT,
  payload: id,
});

export const updateTarget = (number:number): actionTypes => ({
  type: types.UPDATE_TARGET,
  payload: number,
});

export const updateTemperature = (obj:unknown): actionTypes => ({
  type: types.UPDATE_TEMPERATURE,
  payload: obj,
});

export const reset = (): actionTypes => ({
  type: types.RESET,
});

/* eslint-disable max-len */
import * as types from '../constants/actionTypes';

interface getStateAction {
  type: typeof types.GET_STATE
  payload: {
    lights?: {1?:{name?: string, status?:boolean}},
    temperature?: number,
    eco?: boolean,
  }
}

interface allLightsAction {
  type: typeof types.ALL_LIGHTS
  payload: boolean
}

interface updateLightAction {
  type: typeof types.UPDATE_LIGHT
  payload: {
    id: string | number,
    value?: {
      name?: string,
      status?: boolean
    }
  }
}

interface deleteLightAction {
  type: typeof types.DELETE_LIGHT
  payload: number
}

interface updateTargetAction {
  type: typeof types.UPDATE_TARGET
  payload: number
}

interface updateTemperatureAction {
  type: typeof types.UPDATE_TEMPERATURE
  payload: {
    temperature?: number,
    eco?: boolean
  }
}

interface resetAction {
  type: typeof types.RESET
}

export type actionTypes = getStateAction | allLightsAction | updateLightAction | deleteLightAction | updateTargetAction | updateTemperatureAction | resetAction

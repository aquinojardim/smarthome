export interface InitialState {
  lightCount: number;
  lights: {1?:{name?: string, status?:boolean}};
  temperature: number;
  targetTemperature: number;
  eco: boolean;
}

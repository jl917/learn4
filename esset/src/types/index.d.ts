export interface IPlugin {
  name: string;
  type: EnhancerType;
  hook: Function;
}

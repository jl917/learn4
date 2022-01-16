interface IFn {
  [key: string]: Function;
}
interface IMeta {
  parser: IFn;
  observer: IFn;
  files: string[];
}

type EnhancerType = 'parser' | 'observer';

class Enhancer {
  meta: IMeta;
  constructor() {
    this.meta = {
      parser: {},
      observer: {},
      files: [],
    }
  }
  plugin(name: string, type: EnhancerType, hook: Function) {
    try {
      this.meta[type][name] = hook;
    } catch (error) {
      throw new Error(name)
    }
  }
  applyPlugin(name, type, ...args: any[]) {
    this.meta.files = type === 'parser' ? this.meta.files : this.meta[type][name](...args);
  }
}

export default Enhancer;

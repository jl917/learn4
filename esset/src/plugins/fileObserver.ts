
import glob from 'glob';
import { IPlugin } from "../types";

const fileObserverPlugin = (path = './src'): IPlugin => ({
  name: 'fileObserver',
  type: 'observer',
  hook: () => glob.sync(path),
})

export default fileObserverPlugin;

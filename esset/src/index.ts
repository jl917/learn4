import Enhancer from "./Enhanser";
import fileObserverPlugin from "./plugins/fileObserver";
import run from "./run";

const task = new Enhancer();

run(task, fileObserverPlugin());

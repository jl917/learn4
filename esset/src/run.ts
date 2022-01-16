const run = (enhancer, observer) => {
  enhancer.plugin(observer.name, observer.type, observer.hook);
  enhancer.applyPlugin(observer.name, observer.type);
  console.log(enhancer)
}

export default run;

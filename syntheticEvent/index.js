class SyntheticEvent {
  constructor(e) {
    this.nativeEvent = e;
  }

  stopPropagation() {
    this._stopPropagation = true;
    if (this.nativeEvent.stopPropagation) {
      this.nativeEvent.stopPropagation();
    }
  }
}

// 绑定事件
const addEvent = (container, type) => {
  container.addEventListener(type, (e) => {
    dispatchEvent(e, type.toUpperCase());
  });
}

const dispatchEvent = (e, type) => {
  // step1 包装合成事件
  const se = new SyntheticEvent(e);
  const ele = e.target;

  // step2 比较hack放假， 通过DOM节点找到对应的FiberNode
  let fiber;
  for (let prop in ele) {
    if (prop.toLocaleLowerCase().includes('fiber')) {
      fiber = ele[prop];
    }
  }

  // step3 收集路径中”该事件的所有回调函数“
  const patchs = collectPaths(type, fiber);

  // step4 捕获阶段实现
  triggerEventFlow(paths, `${type}_CAPTURE`, se);

  // step5 冒泡阶段的实现
  if (!_se._stopPropagation) {
    triggerEventFlow(paths.reverse(), type, se);
  }
}

// 收集路径中的事件回调函数
const collectPaths = (type, begin) => {
  const paths = [];

  // 不是根FiberNode的话，就一直向上遍历
  while (begin.tag !== 3) {
    const { memoizedProps, tag } = begin;
    // 5代表DOM节点对应FiberNode
    // https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/ReactWorkTags.js
    if (tag === 5) {
      const eventName = ("on" + type).toLocaleLowerCase();

      // 如果包含对应事件回调，保存在paths中
      if (memoizedProps && Object.keys(memoizedProps).includes(eventName)) {
        const pathNode = {};
        pathNode[type.toUpperCase()] = memoizedProps[eventName];
        paths.push(pathNode);
      }
    }
    begin = begin.return;
  }
  return paths;
}

const triggerEventFlow = (paths, type, se) => {
  // 从后向前遍历
  for (let i = paths.length; i > 0; i--) {
    const pathNode = paths[i];
    const callback = pathNode[type];

    // 存在回调函数，传入合成事件，执行
    if (callback) {
      callback.call(null, se);
    }

    // 如果执行了se.stopPropagation()，取消接下来的遍历
    if (se._stopPropagation) {
      break;
    }
  }
}
module.exports = {
  getInjectProfilingHooks,
};

function getInjectProfilingHooks() {
  const originalHooks = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  try {
    let injectProfilingHooks = null;
    globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
      supportsFiber: true,
      inject: (injected) => {
        console.log("inject", injected);
        injected.enableProfilerTimer = true;
        injected.enableProfilerCommitHooks = true;
        injectProfilingHooks = injected.injectProfilingHooks;
        return 1;
      },
      onCommitFiberRoot: () => {},
      onCommitFiberUnmount: () => {},
    };
    require("react-reconciler")({}).injectIntoDevTools({
      // if there happen to be problems, these need to be injected/faked here
      // findFiberByHostInstance: getClosestInstanceFromNode,
      // bundleType: __DEV__ ? 1 : 0,
      // version: ReactVersion,
      // rendererPackageName: 'react-dom',
    });
    return injectProfilingHooks;
  } finally {
    // if (originalHooks)
    //   globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ = originalHooks;
  }
}

/**

export type DevToolsProfilingHooks = {
  // Scheduling methods:
  markRenderScheduled: (lane: Lane) => void,
  markStateUpdateScheduled: (fiber: Fiber, lane: Lane) => void,
  markForceUpdateScheduled: (fiber: Fiber, lane: Lane) => void,

  // Work loop level methods:
  markRenderStarted: (lanes: Lanes) => void,
  markRenderYielded: () => void,
  markRenderStopped: () => void,
  markCommitStarted: (lanes: Lanes) => void,
  markCommitStopped: () => void,
  markLayoutEffectsStarted: (lanes: Lanes) => void,
  markLayoutEffectsStopped: () => void,
  markPassiveEffectsStarted: (lanes: Lanes) => void,
  markPassiveEffectsStopped: () => void,

  // Fiber level methods:
  markComponentRenderStarted: (fiber: Fiber) => void,
  markComponentRenderStopped: () => void,
  markComponentErrored: (
    fiber: Fiber,
    thrownValue: mixed,
    lanes: Lanes,
  ) => void,
  markComponentSuspended: (
    fiber: Fiber,
    wakeable: Wakeable,
    lanes: Lanes,
  ) => void,
  markComponentLayoutEffectMountStarted: (fiber: Fiber) => void,
  markComponentLayoutEffectMountStopped: () => void,
  markComponentLayoutEffectUnmountStarted: (fiber: Fiber) => void,
  markComponentLayoutEffectUnmountStopped: () => void,
  markComponentPassiveEffectMountStarted: (fiber: Fiber) => void,
  markComponentPassiveEffectMountStopped: () => void,
  markComponentPassiveEffectUnmountStarted: (fiber: Fiber) => void,
  markComponentPassiveEffectUnmountStopped: () => void,
};
 *
 */

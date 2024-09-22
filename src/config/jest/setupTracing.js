globalThis.injectProfilingHooks =
  require("../../testing/internal/profile/tracing.js").getInjectProfilingHooks();

globalThis.injectProfilingHooks({
  // Scheduling methods:
  markRenderScheduled: (lane) => {
    console.log("markRenderScheduled(%o)", lane);
  },
  markStateUpdateScheduled: (fiber, lane) => {
    console.log("markStateUpdateScheduled(%o, %o)", fiber, lane);
  },
  markForceUpdateScheduled: (fiber, lane) => {
    console.log("markForceUpdateScheduled(%o, %o)", fiber, lane);
  },

  // Work loop level methods:
  markRenderStarted: (lanes) => {
    console.log("markRenderStarted(%o)", lanes);
  },
  markRenderYielded: () => {
    console.log("markRenderYielded()");
  },
  markRenderStopped: () => {
    console.log("markRenderStopped()");
  },
  markCommitStarted: (lanes) => {
    console.log("markCommitStarted(%o)", lanes);
  },
  markCommitStopped: () => {
    console.log("markCommitStopped()");
  },
  markLayoutEffectsStarted: (lanes) => {
    console.log("markLayoutEffectsStarted(%o)", lanes);
  },
  markLayoutEffectsStopped: () => {
    console.log("markLayoutEffectsStopped()");
  },
  markPassiveEffectsStarted: (lanes) => {
    console.log("markPassiveEffectsStarted(%o)", lanes);
  },
  markPassiveEffectsStopped: () => {
    console.log("markPassiveEffectsStopped()");
  },

  // Fiber level methods:
  markComponentRenderStarted: (fiber) => {
    console.log("markComponentRenderStarted(%o)", fiber);
  },
  markComponentRenderStopped: () => {
    console.log("markComponentRenderStopped()");
  },
  markComponentErrored: (fiber, thrownValue, lanes) => {
    console.log("markComponentErrored(%o, %o, %o)", fiber, thrownValue, lanes);
  },
  markComponentSuspended: (fiber, wakeable, lanes) => {
    console.log("markComponentSuspended(%o, %o, %o)", fiber, wakeable, lanes);
  },
  markComponentLayoutEffectMountStarted: (fiber) => {
    console.log("markComponentLayoutEffectMountStarted(%o)", fiber);
  },
  markComponentLayoutEffectMountStopped: () => {
    console.log("markComponentLayoutEffectMountStopped()");
  },
  markComponentLayoutEffectUnmountStarted: (fiber) => {
    console.log("markComponentLayoutEffectUnmountStarted(%o)", fiber);
  },
  markComponentLayoutEffectUnmountStopped: () => {
    console.log("markComponentLayoutEffectUnmountStopped()");
  },
  markComponentPassiveEffectMountStarted: (fiber) => {
    console.log("markComponentPassiveEffectMountStarted(%o)", fiber);
  },
  markComponentPassiveEffectMountStopped: () => {
    console.log("markComponentPassiveEffectMountStopped()");
  },
  markComponentPassiveEffectUnmountStarted: (fiber) => {
    console.log("markComponentPassiveEffectUnmountStarted(%o)", fiber);
  },
  markComponentPassiveEffectUnmountStopped: () => {
    console.log("markComponentPassiveEffectUnmountStopped()");
  },
});

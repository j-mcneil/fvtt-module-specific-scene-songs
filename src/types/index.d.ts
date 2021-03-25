type HookKey = 'init' | 'ready';

declare const Hooks = {
  on: (key: HookKey, fn: () => any) => {}
};

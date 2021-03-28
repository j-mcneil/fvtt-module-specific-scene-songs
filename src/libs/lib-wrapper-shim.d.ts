export class libWrapper {
  static get is_fallback(): boolean;
  static register(module: string, target: string, fn: (...args: any[]) => any, type: 'MIXED' | 'OVERRIDE' | 'WRAPPER');
}

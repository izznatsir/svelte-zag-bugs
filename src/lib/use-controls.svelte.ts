import { getControlDefaults, type ControlRecord } from "./define-controls";
import { deepSet } from "./deep-get-set";

export function useControls<T extends ControlRecord>(config: T) {
  const context = $state(getControlDefaults(config));

  const controls = {
    get config() {
      return config;
    },
    get context() {
      return context;
    },
    setContext(key: string, value: any) {
      deepSet(context, key, value);
    },
  };

  return controls;
}

export type UseControlsReturn<T extends ControlRecord = ControlRecord> =
  ReturnType<typeof useControls<T>>;
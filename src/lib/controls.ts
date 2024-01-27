import { defineControls } from "./define-controls";

export const colorPickerControls = defineControls({
  disabled: { type: "boolean", defaultValue: false },
  readOnly: { type: "boolean", defaultValue: false },
  dir: {
    type: "select",
    options: ["ltr", "rtl"] as const,
    defaultValue: "ltr",
  },
});

import { defineConfig } from "@unocss/vite"
import { presetMini } from "unocss"
import type { Theme } from "unocss/preset-mini"
import { toMutable } from "../../utils/types" // works normally
// import { toMutable } from "@/utils/types" // unocss extension hungs with "@/..." syntax

export default defineConfig<Theme>({
  rules: [["table", { display: "table" }]],
  extendTheme: (t) => {
    t.fontSize = toMutable({
      sm: "16px",
    } as const)
  },
  presets: [presetMini()],
})

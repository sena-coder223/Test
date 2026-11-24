import { loadFont } from "@remotion/fonts"
import latin from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2"
import latinExt from "@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2"

export const fontsReady = Promise.all([
  loadFont({ family: "Inter", url: latin, weight: "100 900", format: "woff2" }),
  loadFont({
    family: "Inter",
    url: latinExt,
    weight: "100 900",
    format: "woff2",
    unicodeRange: "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+1E00-1E9F",
  }),
])

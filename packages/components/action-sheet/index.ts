import { type SFCWithInstall, withInstall } from "@apple-ui/utils"
import ActionSheet from "./src/action-sheet.vue"

export const AiActionSheet: SFCWithInstall<typeof ActionSheet> =
  withInstall(ActionSheet)

export * from "./src/action-sheet"

export default AiActionSheet
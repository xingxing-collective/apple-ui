import { type SFCWithInstall, withInstall } from "@apple-ui/utils"
import ActionSheets from "./src/action-sheets.vue"

export const AiActionSheets: SFCWithInstall<typeof ActionSheets> =
  withInstall(ActionSheets)

export * from "./src/action-sheets"

export {default} from "./src/action-sheets.vue"